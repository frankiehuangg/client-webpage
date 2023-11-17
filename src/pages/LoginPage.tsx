import { FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom' 
import { fetchApi } from '../lib/fetchApi';

const LoginPage = () => {
    document.title = 'Login'

    const history = useNavigate()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleLogin = async (e: any) => {
        e.preventDefault();

        if (username === '' || password === '') {
            alert('Please fill in your username and password')
            setUsername('')
            setPassword('')
            return
        }

        try {
            const body = {
                username: username,
                password: password
            }

            const headers = {
                'Content-Type': 'application/json'
            }
            
            const response = await fetchApi('http://localhost:8000/login', 'POST', headers, body)

            const data = await response.json()
            
            if (response.status === 200) {
                localStorage.setItem('token', data.token)
                alert(data.message)
                history('/')
                return
            } else if (response.status === 400) {
                alert(data.message);
                setUsername('')
                setPassword('')
            } else if (response.status === 500) {
                alert('Internal server error')
                setUsername('')
                setPassword('')
            }

        } catch (error) {
            alert('Error unknown, login unsuccessful')
        }
    }

    return (
        <div className='flex w-full justify-center align-middle'>
            <div className='flex flex-row gap-[20vw] items-center'>
                <div className='text-[15vw]'>
                    <FaTwitter/>
                </div>
                <div className='justify-center h-[60vh] p-[3vw] items-center text-center border-2 rounded-[10px] border-solid border-white'>
                    <form className='flex flex-col gap-[2.5vh] w-full min-w-[20vw]'>
                        <h1 className='m-[3vh]'>Login</h1>
                        <div>
                            <input placeholder="Username" value={username} onChange={handleUsernameChange} type="text" className='p-[0.3vw] w-full mt-[1vh]'/>
                        </div>
                        <div>
                            <input placeholder="Password" value={password} onChange={handlePasswordChange} type="password" className='p-[0.3vw] w-full'/>
                            <p className='text-[1.7vh] text-right'>Forgot your password? <a href="/forget-password">Reset</a></p>
                        </div>
                        <button className="border-[2px] border-solid border-white mt-[5vh]" type="submit" onClick={handleLogin}>Login</button>
                        <p>Don't have an account? <a href="/register">Register</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage