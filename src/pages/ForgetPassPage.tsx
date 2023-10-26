import { FaTwitter } from 'react-icons/fa';
import { useState } from 'react';


const ForgetPassPage = () => {
    document.title = 'Forget Password';

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleConfPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfPassword(e.target.value)
    }

    const handleReset = (e: any) => {
        e.preventdefault();
        
        
    }

    return (
        <div className='flex w-full justify-center align-middle'>
            <div className='flex flex-row gap-[20vw] items-center'>
                <div className='text-[15vw]'>
                    <FaTwitter/>
                </div>
                <div className='justify-center h-[70vh] p-[3vw] items-center text-center border-2 rounded-[10px] border-solid border-white'>
                    <form className='flex flex-col gap-[2vh]'>
                        <h1 className='m-[2vh]'>Reset Password</h1>
                        <div>
                            <input placeholder="Email" value={email} onChange={handleEmailChange} type="email" className='p-[0.3vw] w-full mt-[3vh]'/>
                        </div>
                        <div>
                            <input placeholder="Password" value={password} onChange={handlePasswordChange} type="password" className='p-[0.3vw] w-full'/>
                        </div>
                        <div>
                            <input placeholder="Confirm Password" value={confPassword} onChange={handleConfPasswordChange} type="password" className='p-[0.3vw] w-full'/>
                        </div>
                        <button className="border-[2px] border-solid border-white mt-[10vh]" type="submit" onClick={handleReset}>Reset</button>
                        <p>Cancel reset? <a href="/login">Login</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassPage