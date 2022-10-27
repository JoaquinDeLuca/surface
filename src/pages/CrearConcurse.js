import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useCreateMutation } from '../features/actions/ConcurseAPI'
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";


export default function CrearConcurse() {

    const navigate = useNavigate()
    const user = useSelector( state => state.user)

    const [create] = useCreateMutation();

    const [createCurse, setCreateCurse] = useState({
        name: user.id,
        description: "",
        photo: "",
        college: "",
        course: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setCreateCurse({ ...createCurse, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const newCurse = {
            name: user.id,
            description: createCurse.description,
            photo: createCurse.photo,
            college: createCurse.college,
            course: createCurse.course
        }

        create(newCurse)
        .then( response => {
            if(response.data.success === true){
                swal({
                    title: "Fue creado con Exito!",
                    icon: "success",
                    buttons:{
                        redirection: {
                          text: "Ir a ver mi colegio",
                          value: "contest"
                        },
                      }
                }).then((value) => {
                    switch (value) {
                      case "contest":
                        navigate('/contest')
                        break;
                      default:
                        console.log('');
                    }
                });;
            } 
        })

        e.target.reset()
    }

    return (
        <div style={{minHeight:"82vh", display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "center"}}>
            <h2>Crear Colegio</h2>
            <form style={{minWidth: "70vw"}} onSubmit={handleSubmit}>
                <label for="description">Description</label>
                <input id="description" onChange={handleChange} name="description" type="text" required />
                <label for="photo" >Photo</label>
                <input id="photo" onChange={handleChange} name="photo" type="text" required />
                <label for="college">Colegio</label>
                <input id="college" onChange={handleChange} name="college" type="text" required />
                <label for="course">Curse</label>
                <input id="course" onChange={handleChange} name="course" type="text" required />
                <button type='submit'>Crear</button>
            </form>
        </div>
    )
}
