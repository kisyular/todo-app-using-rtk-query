import React from 'react'

import deleteIMG from '../../images/deleting.gif'

const Deleting = () => {
	return (
		<div className='flex justify-center items-center h-screen flex-col'>
			<p className='text-red-600 font-extrabold text-4xl'>Deleting</p>
			<img src={deleteIMG} alt='loading' />
		</div>
	)
}

export default Deleting
