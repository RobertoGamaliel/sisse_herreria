import React, {useState, useEffect} from 'react';
import '../pagesStyles/mainPage.css';
import herrero  from '../assets/herrero.jpg'
const MainPage = () =>{

    useEffect(()=>{
        
    },[]);
    
    return(
        <div className='col-lg-12 vh-100 vw-100 m-0 p-0  absolute index--1 text-white overflow' style={{backgroundColor:'#062E48'}}>
            <div className='col-lg-12 m-0 p-3 '>
                <div className='row justify-content-between m-0 p-0 relative'>
                    <div className='col-lg-12 m-0 p-0 text-bold  text-xl text-start quicksand'>SSIE</div>
                    <div className='col-lg-12 m-0 p-0 text-300 text-m text-end absolute top-right'>
                    <span className='pointer text-hover me-4'>Inicio</span> 
                    <span className='pointer text-hover me-4'>Sobre nosotros</span> 
                    <span className='pointer text-hover'>Nuestros servicios</span> 
                    </div>
                </div>
            </div>
            <div className='col-lg-12 p-2 m-0 mt-5 ps-3 pe-3 text-start'>
                <div className='col-lg-9 display-4 text-100'>SOLDADURAS Y SERVICIOS INDUSTRIALES ENSENADA</div>
                <div className='col-lg-12 textm text-300 opacity-70 justify'>El mejor servicio en la ciudad, El mejor servicio en la ciudad, El mejor servicio en la ciudad, El mejor servicio en la ciudad, El mejor servicio en la ciudad, </div>
                <div className='row justify-content-start m-0 p-0 mt-3 mb-5'>
                    <button className='btn btn-dark shadow round-xxs wpx-150 me-4 text-white scale-05 text-bold' >Explorar &#62;</button>
                    <button className='btn btn-transparent border border-white shadow round-xxs wpx-150 text-white text-bold scale-05' >Contactanos &#62;</button>
                </div>
            </div>

            <div className='col-lg-12 m-0 p-0 mt-5 vw-100 mb-5'>
                <div className='row justify-content-evenly m-0 p-0 w-100 contenedor bg-white'>
                    <div className='col-sm-7 text-center p-2'>
                        <div className='col-lg-12 text-black h1 m-0 p-0 text-bold quicksand opacity-90'>NOSOTROS</div>
                        <div className='row justify-content-center m-0 p-0 w-100'>
                            <div className='wpx-300 m-0 p-0' style={{borderBottom:'3px solid #062E48'}}></div>
                        </div>
                        
                        <div className='col-lg-12 text-m text-400 text-dark justify opacity-80 m-0 p-0 pt-3'>
                        Somos una empresa de herrería comprometida con la excelencia en la fabricación de productos metálicos. Nuestra dedicación se refleja en la creación de diseños únicos y funcionales, abarcando desde elegantes barandas y puertas hasta robustas estructuras. Con un equipo de artesanos altamente calificados, transformamos ideas en realidad, ofreciendo soluciones duraderas y estéticas. En cada proyecto, fusionamos la tradición de la herrería con la innovación para superar las expectativas de nuestros clientes
                        </div>
                    </div>
                    <img src={herrero} className="image-round circular-shape  m-0 p-3 " />
                </div>
            </div>

            <div className='row justify-content-evenly m-0 p-3 w-100'>
                <div className='col-sm-5 bg-white5 p-3 round-xxs mt-4'></div>
                <div className='form-cont bg-white5 p-3 round-xxs mt-4'>
                    <div className='row justify-content-center m-0'>
                        <div className='col-lg-12 h3 text-300 text-center'>Contáctanos</div>
                        <div className='form-group col-md-12 '>
                            <label className='text-bold'>Tu nombre</label>
                            <input type='text' className='form-control round-xxs' placeholder=''/>
                        </div>

                        <div className='form-group col-md-12 m-0 mt-3'>
                            <label className='text-bold'>Email</label>
                            <input type='text' className='form-control round-xxs' placeholder=''/>
                        </div>

                        <div className='form-group col-md-12 m-0 mt-3'>
                            <label className='text-bold'>Tu mensaje</label>
                            <textarea type='text' className='form-control round-xxs' placeholder=''/>
                        </div>

                        <button className='btn btn-transparent border border-white text-white text-bold scale-1 shadow w-90 round-xxs mt-3' >Enviar</button>

                    </div>
                </div>
            </div>
            <div className='col-lg-12 mb-5'></div>
        </div>
    )
}
    
export default MainPage;