import React, { useState } from 'react'
import { Alert, Checkbox, FormControlLabel, Snackbar } from '@mui/material'
import '../styles/Workout.css'
import '../styles/Profile.css'
import { useSelector } from 'react-redux';
const Profile = () => {
    // const mobileView = useMediaQuery('(max-width:600px)');
    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    const [weight, setWeight] = useState(user.weight ? user.weight : "");
    const [age, setAge] = useState(user.age ? user.age : "");
    const [gender, setGender] = useState(user.gender ? user.gender : "");
    const [name, setName] = useState(user.name ? user.name : "");
    const [editOpen, setEditOpen] = useState(!Boolean(user.age && user.weight && user.gender));
    const [alert, setAlert] = useState({ open: false, status: "", message: "" });
    const handleGenderChange = (e) => {
        if (e.target.checked) {
            setGender(e.target.value);
        }
        else
            setGender();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("click") 
        if (editOpen === false)
            setEditOpen(true);
        else {
            console.log(age, weight, gender, name);
            const url = `http://localhost:5000/profile/addProfile/${user._id}`;
            // const url = `https://muscle-grabber-backend.onrender.com/profile/addProfile/${user._id}`;
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({ weight, age, gender, name }),
                headers: { Authorization: `Bearer ${token}`, "Content-type": "application/json" },

            });
            const data = await response.json();
            console.log("response", data);
            if (data.status === "success") {
                setEditOpen(false);
                setAlert({
                    status: "success",
                    open: true,
                    message: data.message
                })
            }
            else if (data.status === "error") {
                setWeight(user.weight ? user.weight : "");
                setAge(user.age ? user.age : "");
                setName(user.name ? user.name : "");
                setGender(user.gender ? user.gender : "");
                setEditOpen(false);
                setAlert({
                    status: "error",
                    open: true,
                    message: data.message
                })
            }
        }
    }

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlert((prev) => {
            return {
                ...prev,
                open: false
            }
        });
    };

    const handleCancel = (e) => {
        e.preventDefault();
       
        setEditOpen(false);
    }
    // const handleEdit = () => {

    //     const id = document.getElementById("edit1");
    //     console.log("id",id);

    //     if (id.disabled) {
    //         document.getElementById("edit1").disabled = false;
    //     }
    //     else {
    //         document.getElementById("edit1").disabled = true;
    //     }
    // }
    return (
        <div className='profileCont'>
            <div className="formContainer font-white">
            {editOpen && <div className="font-3 ">Complete your Profile!</div>}
                <form>

                    {!editOpen ? <div>{name}</div>
                        : <div><label className='margin-0'>Name</label><input type="text" className="inputCont width-100" placeholder='Enter your name' minLength='3' value={name} onChange={(e) => setName(e.target.value)} /></div>}

                    {!editOpen ? <div >Weight: {weight}</div>
                        : <div><label className="margin-0">Weight</label><input id='edit1' className="inputCont width-100" autofocus type="number" placeholder='Enter your Weight' value={weight} min='10' onChange={(e) => setWeight(e.target.value)} /></div>}

                    {!editOpen ? <div>Age: {age}</div>
                        : <div><label className="margin-0">Age</label><input className='inputCont width-100' type="number" placeholder='Enter your Age' min='10' value={age} onChange={(e) => setAge(e.target.value)} /></div>}

                    {!editOpen ? <div>Gender: {gender}</div>
                        :
                        <div className="display-flex-row justify-content-between " >
                            <FormControlLabel sx={{ color: "#75756b" }} control={<Checkbox color="success" value="Male" onChange={handleGenderChange} checked={gender === 'Male'} />} label="Male" />

                            <FormControlLabel sx={{ color: "#75756b" }} control={<Checkbox color="success" value="Female" onChange={handleGenderChange} checked={gender === 'Female'} />} label="Female" />
                        </div>
                    }
                    <div className="btnGroup">
                        <button className="btn width-100" onClick={handleSubmit}>Edit</button>
                        {editOpen && <button className='cancelBtn width-100' onClick={handleCancel}>Cancel</button>}
                    </div>
                </form>
            </div>
            <div className="goalsCont font-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus et laboriosam suscipit quis perferendis sapiente corrupti quasi sint sequi hic excepturi, ab nulla debitis laudantium temporibus tempora cupiditate quas cum? Veritatis molestias dolore earum.
            </div>
            <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleAlertClose}>
                <Alert variant="filled" onClose={handleAlertClose} severity={alert.status} sx={{ width: '100%' }}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Profile;
