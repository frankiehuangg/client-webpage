import { FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { fetchApi } from '../lib/fetchApi';

const RegisterPage = () => {
    document.title = 'Register';

    const history = useNavigate()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleConfPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfPassword(e.target.value)
    }

    const handleRegister = async (e: any) => {
        e.preventDefault();
        
        if (username === '' || email === '' || password === '' || confPassword === '') {
            alert('Please fill in all the fields below')
            setUsername('')
            setEmail('')
            setPassword('')
            setConfPassword('')
            return
        }

        if (password !== confPassword) {
            alert('Password mismatch')
            setPassword('')
            setConfPassword('')
            return
        }

        try {
            const body = {
                username: username,
                email: email,
                password: password,
                confirm_password: confPassword
            }

            const headers = {
                'Content-Type': 'application/json'
            }

            const response = await fetchApi('http://localhost:8000/register', 'POST', headers, body)

            const data = await response.json()

            if (response.status === 200) {
                localStorage.setItem('token', data.token)
                alert(data.message)
                history('/')
                return
            } else if (response.status === 400) {
                alert(data.message)
                setUsername('')
                setEmail('')
                setPassword('')
                setConfPassword('')
            } else if (response.status === 500) {
                alert('Internal server error')
                setUsername('')
                setEmail('')
                setPassword('')
                setConfPassword('')
            }

        } catch (error) {
            alert('Uknown error, register unsuccessful')
        }
    }

    return (
        <div className='flex w-full justify-center align-middle'>
            <div className='flex flex-row gap-[20vw] items-center'>
                <div className='text-[15vw]'>
                    <FaTwitter/>
                </div>
                <div className='justify-center h-[70vh] p-[3vw] items-center text-center border-2 rounded-[10px] border-solid border-white'>
                    <form className='flex flex-col gap-[2vh] w-full min-w-[20vw]'>
                        <h1 className='m-[3vh]'>Register</h1>
                        <div>
                            <input placeholder="Username" value={username} onChange={handleUsernameChange} type="text" className='p-[0.3vw] w-full'/>
                        </div>
                        <div>
                            <input placeholder="Email" value={email} onChange={handleEmailChange} type="email" className='p-[0.3vw] w-full'/>
                        </div>
                        <div>
                            <input placeholder="Password" value={password} onChange={handlePasswordChange} type="password" className='p-[0.3vw] w-full'/>
                        </div>
                        <div>
                            <input placeholder="Confirm Password" value={confPassword} onChange={handleConfPasswordChange} type="password" className='p-[0.3vw] w-full'/>
                        </div>
                        <button className="border-[2px] border-solid border-white mt-[5vh]" type="submit" onClick={handleRegister}>Register</button>
                        <p>Already have an account? <a href="/login">Login</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage