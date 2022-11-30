import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Department = () => {
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem("details"));
    console.log(data);
    // const[localstore,setlocalstore]=useState(data)
    // useEffect(() => {
    //     const datas = localStorage.getItem("data");
    //     console.log(datas);
    //     if (datas) {
    //         setlocalstore(JSON.parse(datas));
    //     }
    // }, [data]);
    return (
        <div className="view-container">
            {
                <div className="tablecontainer">
                     <input type="search" placeholder="search" />
                    <table border={1} className="table">
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>department</th>
                               
                            </tr>
                        </thead>
                        
                        <tbody>
                            {data.length < 1 ? (
                                <tr>
                                    <td colSpan={4}>NO data Enter yet !</td>
                                </tr>
                            ) : (
                                data.map((info, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <td>{info.name}</td>
                                            <td>{info.department}</td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    
                    </table>
                    <button type="button" onClick={() => navigate("/")}>back</button>
                </div>
            }
        </div>
    );
};
