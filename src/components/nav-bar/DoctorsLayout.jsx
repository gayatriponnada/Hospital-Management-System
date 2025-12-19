import React from 'react'
import DoctorNavbar from './DoctorNavbar'
import { Outlet } from 'react-router-dom'

const DoctorsLayout = () => {
	return (
		<div>
			<DoctorNavbar />
			<main className='p-4'>
				<Outlet/>
			</main>
			
		</div>
	)
}

export default DoctorsLayout