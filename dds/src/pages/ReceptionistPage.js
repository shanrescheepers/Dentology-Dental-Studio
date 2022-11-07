import { React, useEffect, useState } from 'react';
import { createReceptionist, deleteReceptionist, getReceptionists, updateReceptionist } from '../http/receptionist';
import { Modal, Button } from 'react-bootstrap';
import '../css/receptionistPage.css';
import patientProfilePicturePlaceholder from '../assets/images/female1.jpeg';
import deleteIcon from '../assets/images/dlt-icon.svg'
import editIcon from '../assets/images/edit-icon.svg'
import headReceptionistImage from '../assets/receptionist.png'
import assistantReceptionistImage from '../assets/assistent.png'
export function ReceptionistPage() {
    const [showDelete, setShowDelete] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);

    const [recep, setRecep] = useState({});
    const [receps, setReceps] = useState([]);

    const [recepId, setRecepId] = useState(0);
    const [updateRecepData, setUpdateRecepData] = useState({});

    const handleDeleteClose = () => {
        deleteReceptionist(recepId).then(() => {
            getReceptionists().then(response => {
                setReceps(response.data);
                setShowDelete(false);
                alert('Receptionist deleted!');
            })
        })
    }

    const handleUpdateClose = () => {
        recep.genderId = parseInt(recep.genderId);
        recep.rankId = parseInt(recep.rankId);
        recep.age = parseInt(recep.age);
        recep.recepId = parseInt(recep.recepId);

        if (validateUpdateForm()) {
            updateReceptionist(updateRecepData).then(() => {
                // kry nuwe patients van server af nadat patient geupdate is
                getReceptionists().then(response => {
                    setReceps(response.data);
                });

                alert('Receptionist updated!');
            })

            setShowUpdate(false);
        }
    }
    // LETTERLIK UIT NAME UIT GEHARDLOOP. patientId oorspronklik clash want dit is al geroep in die state. LOL. so nou is dit maar net 'id'
    const handleDeleteShow = (id) => {
        setRecepId(id);
        setShowDelete(true);
    };

    const handleUpdateShow = (updateRecepInfo) => {
        setUpdateRecepData(updateRecepInfo);
        setShowUpdate(true);
    };

    const validateAddForm = () => {
        var regPhone = /^\d{10}$/;
        var regAge = /^\d{1,}$/;
        var regEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/g;
        // doctor is n staaaaaate

        if (recep.name === "" || recep.name === undefined) {
            alert("Name cannot be empty");
            return false;
        }

        if (recep.surname === "" || recep.surname === undefined) {
            alert("Surname cannot be empty");
            return false;
        }

        if (recep.phone === "" || recep.phone === undefined) {
            alert("Phone cannot be empty");
            return false;
        }

        if (!regPhone.test(recep.phone)) {
            alert("Invalid phone number");
            return false;
        }

        if (recep.age === "" || recep.age === undefined) {
            alert("Age cannot be empty");
            return false;
        }

        if (!regAge.test(recep.age)) {
            alert("Invalid age");
            return false;
        }

        if (recep.genderId !== 1 && recep.genderId !== 2) {
            alert("Gender cannot be empty");
            return false;
        }

        if (recep.rankId !== 1 && recep.rankId !== 2) {
            alert("Rank cannot be empty");
            return false;
        }

        if (recep.email === "" || recep.email === undefined) {
            alert("Email cannot be empty");
            return false;
        }

        if (recep.password === "" || recep.password === undefined) {
            alert("Password cannot be empty");
            return false;
        }

        if (recep.password !== recep.confirmPassword) {
            alert("Passwords do not match");
            return false;
        }


        if (!regEmail.test(recep.email)) {
            alert("Invalid email");
            return false;
        }

        return true;
    }

    const validateUpdateForm = () => {
        var regPhone = /^\d{10}$/;
        var regAge = /^\d{1,}$/;
        var regEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/g;

        if (updateRecepData.name === "" || updateRecepData.name === undefined) {
            alert("Name cannot be empty");
            return false;
        }

        if (updateRecepData.surname === "" || updateRecepData.surname === undefined) {
            alert("Surname cannot be empty");
            return false;
        }

        if (updateRecepData.phone === "" || updateRecepData.phone === undefined) {
            alert("Phone cannot be empty");
            return false;
        }

        if (!regPhone.test(updateRecepData.phone)) {
            alert("Invalid phone number");
            return false;
        }

        if (updateRecepData.age === "" || updateRecepData.age === undefined) {
            alert("Age cannot be empty");
            return false;
        }

        if (!regAge.test(updateRecepData.age)) {
            alert("Invalid age");
            return false;
        }

        if (updateRecepData.email === "" || updateRecepData.email === undefined) {
            alert("Email cannot be empty");
            return false;
        }

        if (updateRecepData.password === "" || updateRecepData.password === undefined) {
            alert("Password cannot be empty");
            return false;
        }

        if (updateRecepData.password !== updateRecepData.confirmPassword) {
            alert("Passwords do not match");
            return false;
        }

        if (!regEmail.test(updateRecepData.email)) {
            alert("Invalid email");
            return false;
        }

        return true;
    }

    useEffect(() => {
        // hier is patients wat terugkom
        getReceptionists().then(response => {
            setReceps(response.data);
        });
    }, [])


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setRecep(values => ({ ...values, [name]: value }))
    }

    const handleUpdateRecepChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUpdateRecepData(values => ({ ...values, [name]: value }))
    }

    const getGender = (number) => {
        if (number === "1") {
            return "Female"
        } else {
            return "Male"
        }
    }

    const getRank = (number) => {
        if (number === "1") {
            return "Head"
        } else {
            return "Assistant";
        }
    }

    const getreceptionistimage = (number) => {
        if (number === "1") {
            return headReceptionistImage
        } else {
            return assistantReceptionistImage
        }
    }

    //integrity constraint// 
    // op patient table en al die ander tables, gaan daar active kolomme moet wees. set activee na true/falase nie. Jy delete noit data nie en in die geval van n med prac, as n ander dr data sou nodig he vir dinge. POPI act?? fok dit obvs. History van past en present patients with ids. Dead and or alive
    const handleSubmit = (event) => {
        event.preventDefault();

        recep.genderId = parseInt(recep.genderId);

        recep.rankId = parseInt(recep.rankId);
        recep.age = parseInt(recep.age);

        if (validateAddForm()) {
            createReceptionist(recep).then(() => {
                alert("Receptionist created!");

                // FORM WIU NUE CLEAR NA SUBMIT NIE:
                // doctor state na clear doctor state na submit. doctor->setDoc, fok
                setRecep({});

                getReceptionists().then(response => {
                    setReceps(response.data);
                })
            });
            // Moet eers patient create voor waardes weg gevat word
            // hier word form values geset
            // form is leeg
            document.forms.addRecepForm.name.value = '';
            document.forms.addRecepForm.surname.value = '';
            document.forms.addRecepForm.phone.value = '';
            document.forms.addRecepForm.email.value = '';
            document.forms.addRecepForm.rankId.value = 'DEFAULT';
            document.forms.addRecepForm.genderId.value = 'DEFAULT';
            document.forms.addRecepForm.age.value = '';
            document.forms.addRecepForm.password.value = '';
            document.forms.addRecepForm.confirmPassword.value = '';

        }
    }
    return (
        <section className='recep-page'>
            <div className='recep-view'>
                <h1 className='title'>Existing receptionists</h1>
                <div className='receps-grid'>
                    {receps.map((data, idx) => (
                        // key word terug gestuur na die API toe, die key, verwys na die patient ID se nr. As DELETE gebruik word, is die specification makliker om die 'key idx' te delete.
                        <div key={data.recepId} className='recep-card'>
                            <img src={getreceptionistimage(data.rankId)} alt="recep profile" className='recep-profile-picture' />
                            <h6 className='h6-receps'>{data.name} {data.surname}</h6>
                            <span className='card-text-receps'>{getRank(data.rankId)}</span>
                            <span className='card-text-receps'>{getGender(data.genderId)}</span>
                            <span className='card-text-receps'>{data.age}</span>
                            <span className='card-text-receps'><a href={"tel:" + data.phone}>{data.phone}</a></span>
                            <span className='card-text-receps'><a href={"mailto:" + data.email}>{data.email}</a></span>
                            <div className='button-group'>
                                <img className='icon-button' onClick={() => handleUpdateShow(data)} src={editIcon} alt="icon" />
                                {/* Dis hoe ons onclick gebruik in react. React render die apge on load dit trigger die gewone manier van onClick (onClick="method()") */}
                                {/* https://stackoverflow.com/questions/33846682/react-onclick-function-fires-on-render */}
                                <img className='icon-button' onClick={() => handleDeleteShow(data.recepId)} src={deleteIcon} alt="dlt-icon" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='add-recep'>
                <h3 className='plus-title-recep'>+Receptionist</h3>
                <span className='plus-recep-span' style={{ 'color': 'black', 'fontSize': '20px', 'marginTop': '8px' }}>Add a new receptionist to DDS</span>
                <form name='addRecepForm' className='form-grid' onSubmit={handleSubmit}>
                    <input onChange={handleChange} name='name' type='text' placeholder="Receptionist Name" className='recep-form-inputs' />
                    <input onChange={handleChange} name='surname' type='text' placeholder="Receptionist Surname" className='recep-form-inputs' />
                    <input onChange={handleChange} name='age' type='text' placeholder="Receptionist Age" className='recep-form-inputs' />
                    <select defaultValue={"DEFAULT"} onChange={handleChange} name='genderId' type='text' className='recep-form-inputs' >
                        <option value="DEFAULT" disabled >Gender</option>
                        <option value="1">Female</option>
                        <option value="2">Male</option>
                    </select>
                    <input onChange={handleChange} name='email' type='email' placeholder="Receptionist Email" className='recep-form-inputs' />
                    <input onChange={handleChange} name='phone' type='text' placeholder="Cell Number" className='recep-form-inputs' />
                    <select defaultValue={"DEFAULT"} onChange={handleChange} name='rankId' type='text' className='recep-form-inputs' >
                        <option value="DEFAULT" disabled >Rank</option>
                        <option value="1">Head</option>
                        <option value="2">Assistant</option>
                    </select>
                    <input onChange={handleChange} name='password' type='password' placeholder="Password" className='recep-form-inputs' autoComplete="on" />
                    <input onChange={handleChange} name='confirmPassword' type='password' placeholder="Confirm Password" className='recep-form-inputs' autoComplete="on" />

                    <button onClick={handleSubmit} type='submit' className='recep-form-inputs-add-btn'>Add Receptionist</button>
                </form>
            </div>


            <Modal show={showDelete} onHide={() => setShowDelete(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Receptionist?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you would like to delete this receptionist?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDelete(false)}>
                        No
                    </Button>
                    <Button variant="primary" onClick={handleDeleteClose}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showUpdate} onHide={() => setShowUpdate(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Update {updateRecepData.name} {updateRecepData.surname}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='form-grid'>
                        <input defaultValue={updateRecepData.name} onChange={handleUpdateRecepChange} name='name' type='text' placeholder={"Receptionist Name"} className='recep-form-inputs' />
                        <input defaultValue={updateRecepData.surname} onChange={handleUpdateRecepChange} name='surname' type='text' placeholder="Receptionist Surname" className='recep-form-inputs' />
                        <input defaultValue={updateRecepData.age} onChange={handleUpdateRecepChange} name='age' type='text' placeholder="Receptionist Age" className='recep-form-inputs' />
                        <select defaultValue={updateRecepData.genderId} onChange={handleUpdateRecepChange} name='genderId' type='text' className='recep-form-inputs' >
                            <option value="DEFAULT" disabled >Gender</option>
                            <option value="1">Female</option>
                            <option value="2">Male</option>
                        </select>
                        <input defaultValue={updateRecepData.email} onChange={handleUpdateRecepChange} name='email' type='email' placeholder="Receptionist Email" className='recep-form-inputs' />
                        <input defaultValue={updateRecepData.phone} onChange={handleUpdateRecepChange} name='phone' type='text' placeholder="Cell Number" className='recep-form-inputs' />
                        <select defaultValue={updateRecepData.rankId} onChange={handleUpdateRecepChange} name='rankId' type='text' className='recep-form-inputs' >
                            <option value="DEFAULT" disabled >Rank</option>
                            <option value="1">Head</option>
                            <option value="2">Assistant</option>
                        </select>
                        <input defaultValue={updateRecepData.password} onChange={handleUpdateRecepChange} name='password' type='password' placeholder="Password" className='recep-form-inputs' />
                        <input onChange={handleUpdateRecepChange} name='confirmPassword' type='password' placeholder="Confirm Password" className='recep-form-inputs' />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowUpdate(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleUpdateClose}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}
export default ReceptionistPage;