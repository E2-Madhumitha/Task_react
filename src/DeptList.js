import { useState, useEffect } from "react";
import { View } from "./View";
import { useNavigate } from "react-router-dom";
function DeptList() {
    const [inputarr, setinputarr] = useState([]);
    const [details, setdetails] = useState({
        person_name: "",
        department: "",
        year: "",
    });
    const navigate = useNavigate();
    const [error, seterror] = useState({});
    const [issubmit, setsubmitted] = useState(false);
    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const re = /^[A-Za-z]*$/;
        const num = /^[0-9\b]+$/;
        const removeEmptySpaces = /\s/g;
        const alpnum = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
        if (name == "person_name" && !value) {
            seterror({ ...error, person_name: "Name is required" });
        } else if (name == "person_name" && removeEmptySpaces.test(value)) {
            seterror({ ...error, person_name: "No whitespace allowed" });
        } else if (name == "person_name" && !re.test(value)) {
            seterror({ ...error, person_name: "Only alphabets allowed" });
        } else if (name == "person_name" && re.test(value)) {
            seterror({ ...error, person_name: "" });
        }
        if (name == "department" && !value) {
            seterror({ ...error, department: "Department is required" });
        } else if (name == "department" && removeEmptySpaces.test(value)) {
            seterror({ ...error, department: "No whitespace allowed" });
        } else if (name == "department" && !re.test(value)) {
            seterror({ ...error, department: "Only alphabets allowed" });
        } else if (name == "department" && re.test(value)) {
            seterror({ ...error, department: "" });
        }


        if (name == "year" && !value) {
            seterror({
                ...error,
                year: "Year is required",
            });
        } else if (
            name == "year" &&
            removeEmptySpaces.test(value)
        ) {
            seterror({
                ...error,
                year: "No whitespace allowed",
            });
        } else if (name == "year" && !num.test(value)) {
            seterror({
                ...error,
                year: "Only numerics allowed",
            });
        } else if (
            name == "year" &&
            (value.length < 1 || value.length > 2)
        ) {
            seterror({
                ...error,
                year: "Not allowed",
            });
        } else if (name == "year" && num.test(value)) {
            seterror({ ...error, year: "" });
        }

        setdetails({ ...details, [name]: value });
        console.log(details);
    };
    let { person_name, department, year } =
        details;
    const submitchange = (e) => {
        e.preventDefault();
        const val = (details) => {
            let err = {};
            if (!details.person_name) {
                err.person_name = "Name is required";
            } else if (error.person_name) {
                err.person_name = error.person_name;
            } else if (!error.person_name) {
                err.person_name = "";
            }

            if (!details.department) {
                err.department = "Department is required";
            } else if (error.department) {
                err.department = error.department;
            } else if (!error.department) {
                err.department = "";
            }

            if (!details.year) {
                err.year = "Year is required";
            } else if (error.year) {
                err.year = error.year;
            } else if (!error.year) {
                err.year= "";
            }
            return err;
        };
        if (
            details.person_name &&
            details.department &&
            details.year
        ) {
            setsubmitted(true);
        } else if (
            !details.person_name ||
            !details.department ||
            !details.year
        ) {
            seterror(val(details));
        }

        setinputarr([
            ...inputarr,
            {
                person_name,
                department,
                year
            },
        ]);
        console.log(inputarr);
        console.log(details);
        setdetails({
            person_name: "",
            department: "",
            year: "",
        });
        // localStorage.setItem("details", JSON.stringify(inputarr));
    };

    useEffect(() => {
        const data = localStorage.getItem("deptdetails");
        console.log(data);
        if (data) {
            setdetails(JSON.parse(data));
        }
    }, []);
    console.log("**************", details.name);
    return (
        <>
            <div className="container">
                <form onSubmit={submitchange}>
                    <div className="sample">
                        <div className="header">
                            <p>Department Form</p>
                        </div>
                        <div className="content">
                            <div className="person_name">
                                <label>Person Name*</label>
                                <input
                                    type="text"
                                    name="person_name"
                                    value={details.person_name}
                                    onChange={handlechange}
                                    maxLength={15}
                                />
                                <span>{error.person_name}</span>
                            </div>
                            <div className="departmentd">
                                <label>Department*</label>
                                <input
                                    type="text"
                                    name="department"
                                    value={details.department}
                                    onChange={handlechange}
                                />
                                <span>{error.department}</span>
                            </div>
                          
                            <div className="year">
                                <label>Experience*</label>
                                <input
                                    type="text"
                                    name="year"
                                    value={details.year}
                                    onChange={handlechange}
                                />
                                <span>{error.year}</span>
                            </div>
                            <div className="but">
                                <button type="submit">Submit</button>
                                <button type="button" onClick={() => navigate("/deptview")}>Table</button>
                               
                                {
                                    <p style={{ color: "green" }}>
                                        {issubmit &&
                                        error.person_name.length == 0 &&
                                        error.department.length == 0 &&
                                        error.year == 0
                                            ?  localStorage.setItem("deptdetails", JSON.stringify(inputarr))
                                            // "SUCCESSFULLY VALIDATED!!!"
                                            : null}
                                    </p>
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {/* <div className="view-container">
                {issubmit &&
                    error.name.length == 0 &&
                    error.department.length == 0 &&
                    error.job_title.length == 0 &&
                    error.contact_number.length == 0 &&
                    error.years_of_experience.length == 0 && (
                        <>
                            <div className="tablecontainer">
                                <table border={1}className="table">
                                    <thead>
                                        <tr>
                                            <th>name</th>
                                            <th>department</th>
                                            <th>jobtitle</th>
                                            <th>contact number</th>
                                            <th>experience</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {inputarr.length < 1 ? (
                                            <tr>
                                                <td colSpan={4}>
                                                    NO data Enter yet !
                                                </td>
                                            </tr>
                                        ) : (
                                            inputarr.map((info, ind) => {
                                                return (
                                                    <tr key={ind}>
                                                        <td>{info.name}</td>
                                                        <td>
                                                            {info.department}
                                                        </td>
                                                        <td>
                                                            {info.job_title}
                                                        </td>
                                                        <td>
                                                            {
                                                                info.contact_number
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                info.years_of_experience
                                                            }
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        )}
                                    </tbody>
                                </table>
                            </div> 
                        </>
                    )}
            </div> */}
        </>
    );
}

export default DeptList;
