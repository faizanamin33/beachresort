import React from "react";
import RoomList from "./RoomList";
import RoomFilter from "./RoomFilter";
import { withRoomConsumer } from "../context";
import Loading from "./loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}
export default withRoomConsumer(RoomContainer);

// import React from 'react';
// import RoomList from './RoomList';
// import RoomFilter from './RoomFilter';
// import {RoomConsumer} from '../context';
// import Loading from './loading';

// const RoomContainer = () => {
//     return (
//         <RoomConsumer>
//             {value => {
//                 const {loading, rooms, sortedRooms} = value;
//                 if(loading){
//                     return <Loading />
//                 }
//                 return(

//                     <div>Hello from container

//                         <RoomList rooms = {rooms}/>
//                         <RoomFilter rooms = {sortedRooms}/>
//                     </div>

//                 );
//             }}
//         </RoomConsumer>
//      );
// }

// export default RoomContainer;
