import React,{useEffect,useState} from 'react'
import { useNavigation } from 'react-router-dom';
import { db } from "@/service/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import UserTripCardItem from './components/UserTripCardItem';


function MyTrips() {

    useEffect(()=>{
        GetUserTrips();
    },[])
    const navigation=useNavigation();
    const [userTrips,setUserTrips]=useState([]);
   const GetUserTrips=async()=>{
    const user=JSON.parse(localStorage.getItem('user'));
    
    if(!user){
        navigation('/login');
   }
   setUserTrips([]);
   const q=query(collection(db, "AITrips"), where("userEmail", "==", user?.email));
   const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
    setUserTrips((prevTrips) => [...prevTrips, doc.data()]);
});
}
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
        <h2 className='font-bold text-3xl'>My Trips</h2>
    
        <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-10'> 
            {userTrips.map((trip, index) => (
            
            <UserTripCardItem trip={trip} />
            ))}
        </div>
    </div>
    
  )
}

export default MyTrips