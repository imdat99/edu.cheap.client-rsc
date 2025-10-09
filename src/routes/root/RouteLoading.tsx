"use client";
import {
    useNavigation
} from "react-router";


const RouteLoading = () => {
    const navigation = useNavigation();
  return (
    <div>{navigation.state !== "idle" && <p>Loading...</p>}</div>
  )
}

export default RouteLoading