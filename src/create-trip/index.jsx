import React, { useState, useEffect } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Input } from "@/components/ui/input";
import { SelectBudgetOption, SelectTravelesList, AI_PROMPT } from "@/constants/options";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import DestinationSearch from '@/components/ui/DestinationSearch';
import { chatSession } from '@/service/AIModal';
import { useNavigate} from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '@/service/firebaseConfig';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { LogIn } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// import { useAuth } from '@components/context/AuthContext';
// import { useGoogleLogin } from './useGoogleLogin';


function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState({});
  const [openDialog, setOpenDialog] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate=useNavigate();
  

  const handleInputChange = (name, value) => {
    if (name === 'noOfDays' && value > 5) {
      toast("Please select less than 5 days");
      return;
    }
    setFormData({
      ...formData,
      [name]: value
    })
  }

  useEffect(() => {
    console.log(formData);
  }, [formData])


const login =useGoogleLogin({
  onSuccess:(codeResp)=> {
    const tokenInfo = codeResp;
    GetUserProfile(tokenInfo);
  },
    onError:(error)=>console.log(error)
})

const GetUserProfile = (tokenInfo) => {
  axios
    .get(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${tokenInfo.access_token}`,
          Accept: "application/json",
        },
      }
    )
    .then((resp) => {
      console.log(resp.data);
      localStorage.setItem("user", JSON.stringify(resp.data));
      setOpenDialog(false);
      // OnGenerateTrip(); // Update this line to call the correct function
    })
    .catch((error) => {
      console.error("Error fetching user profile:", error);
    });
};


  const OnGenerateTrip = async () => {

    const user = JSON.parse(localStorage.getItem('user'));
    if (!user ) {
      setOpenDialog(true);
      return;
    }
    setOpenDialog(true);
    if (formData?.noOfDays > 5 && !formData?.location || !formData?.budget || !formData?.traveler) {
      toast("Please enter all details");
      return;
    }
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT
      .replace('{location}', formData?.location)
      .replace('{budget}', formData?.budget)
      .replace('{traveler}', formData?.traveler)
      .replace('{totalDays}', formData?.noOfDays)

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log("__",result?.response?.text());
    setLoading(false);
   SaveAiTrip(result?.response?.text());
  }

  const SaveAiTrip=async(TripData)=>{
    setLoading(true);
    const user = JSON.parse (localStorage.getItem('user'));
    const docId=Date.now().toString();

    await setDoc(doc(db, "AITrips", docId), {
      userSelection:formData,
      tripData:JSON.parse(TripData),
      userEmail:user?.email,
      id:docId
    });
    setLoading(false);
    navigate('/view-trip/'+docId );
  }


  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
      <h2 className='font-bold text-3xl '>Tell us your travel preferences 🍁</h2>
      <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>

      <div className='mt-20 flax flex-col gap-10'>
        <div>
          <h2 className='text-xl my-3 font-medium'>What is your destination choice?</h2>
          <DestinationSearch
            value={place}
            onChange={(value) => {
              setPlace(value);
              handleInputChange('location', value);
            }}
          />
        </div>

        <div className='mt-20'>
          <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip</h2>
          <Input placeholder='Ex. 3' type="number"
            onChange={(e) => handleInputChange('noOfDays', e.target.value)}
          />

        </div>

      </div>

      <div>
        <h2 className='text-xl my-3 font-medium'>What is Your budget</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectBudgetOption.map((item, index) => (
            <div key={index}
              onClick={() => handleInputChange('budget', item.title)}
              className={`p-4 border rounded-lg 
              cursor-pointer hover:shadow-lg
              ${formData?.budget == item.title && 'shadow-md border-black'}
              `}>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>

          ))}
        </div>
      </div>

      <div>
        <h2 className='text-xl my-3 font-medium'>Who do you plan on traveling with on your next adventure?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectTravelesList.map((item, index) => (
            <div key={index}
              onClick={() => handleInputChange('traveler', item.people)}
              className={`p-4 border rounded-lg 
              cursor-pointer hover:shadow-lg
              ${formData?.traveler == item.people && 'shadow-md border-black'}
              `}>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>

          ))}
        </div>
      </div>

      <div className='mt-10 flex justify-end'>
        <Button 
        disebled={loading}
        onClick={OnGenerateTrip}>
          {loading ? <AiOutlineLoading3Quarters className='animate-spin h-5 w-5' /> : "Generate Trip"}
         
         </Button>
      </div>
      <Dialog open={openDialog} onClick={login} onClose={() => setOpenDialog(false)}>
 
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        <img src="logo.svg" alt="" />
        <h2 className='font-bold text-lg mt-7 '>sign in with google</h2>
        <Button 
        
        onClick={login}
        className="w-full mt-5 gap-4 items-center">
          
         <FcGoogle className='h-5 w-5 '/> 
         sign in with google
         
         </Button>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>


    </div>
  );
}

export default CreateTrip;










