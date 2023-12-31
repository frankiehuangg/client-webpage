import { useState } from "react";
import { Button, Container, Col, Row, Form, Collapse, InputGroup } from "react-bootstrap";
import { fetchApi } from "../lib/fetchApi";
import { useNavigate } from "react-router-dom";


const SettingsPage = () => {
  const [option, setOption] = useState("account-information");
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [description, setDescription] = useState('');
  const [birthdayDate, setBirthdayDate] = useState('');
  const [birthdayMonth, setBirthdayMonth] = useState('');
  const [birthdayYear, setBirthdayYear] = useState('');

  const navigate = useNavigate()

  const SettingsButton = ({ name } : { name: string }) => {
    let formattedName = name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return (
      <Row>
        <Col>
          <Button
          bsPrefix=""
          variant=""
          onClick={() => setOption(name)}
          as={"div"}
          className="settings-button text-white"
          >
          { formattedName }
          </Button>
        </Col>
      </Row>
    );
  }

  const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  
  const updateRepeatPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value)
  }

  const changePasswordHandler = async (e: any) => {
    e.preventDefault()

    if (password !== repeatPassword) {
      alert('Password doesnt match, try again')
      return
    }

    try {
      const headers = {
        Authorization: "Bearer " + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }

      const body = {
        password: password
      }

      const response = await fetchApi(
        'http://localhost:8000/user',
        'PATCH',
        headers,
        body
      )

      const data = await response.json()

      alert(data.message)
    } catch (error) {
      alert("Uknown error, failed to change password")
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleDisplayNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayName(e.target.value)
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }

  const handleBirthdayDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthdayDate(e.target.value)
  }

  const handleBirthdayMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthdayMonth(e.target.value)
  }

  const handleBirthdayYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthdayYear(e.target.value)
  }
  
  const UpdateAccountInformationHandler = async (e:any) => {
    e.preventDefault();

    console.log('test')
    try {
      const body : {
        email? : string,
        username? : string,
        display_name? : string,
        description? : string,
        birthday_date? : string,
        birthday_month? : string,
        birthday_year? : string,
      } = {}

      if (email !== "") {
        body.email = email
      }
      if (username !== "") {
        body.username = username
      }
      if (displayName !== "") {
        body.display_name = displayName
      }
      if (description !== "") {
        body.description = description
      }
      if (birthdayDate !== "") {
        body.birthday_date = birthdayDate
      }
      if (birthdayMonth !== "") {
        body.birthday_month = birthdayMonth
      }
      if (birthdayYear !== "") {
        body.birthday_year = birthdayYear
      }

      const headers = {
        Authorization: "Bearer " + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }

      const response = await fetchApi('http://localhost:8000/user', 'PATCH', headers, body)

      const data = await response.json()

      if (response.status === 200) {
          alert('Account information updated successfully')
          alert(data.message)
      } else if (response.status === 400) {
          alert('Bad request, please try again')
      } else if (response.status === 500) {
          alert('Internal server error')
      }
    }
    catch (err) {
      alert('Unknown error, please try again')
    }
  }

  const deleteAccountHandler = async (e: any) => {
    e.preventDefault()

    try {
      const headers = {
        Authorization: "Bearer " + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }

      const response = await fetchApi(
        'http://localhost:8000/user',
        'DELETE',
        headers
      )

      const data = await response.json()

      if (response.status === 200) {
        alert(data.message)
        navigate('/login')
      } else {
        alert(data.message)
      }
    } catch (err) {
      alert("Uknown error, failed to delete account")
    }
  }

  return (
  <>
    <Container fluid className="h-screen">
      <Row className="h-screen">
        <Col xs={12} md={4} className="p-0 left-settings-container">
          <h4 className="left-settings-container-title">Settings</h4>
          <SettingsButton name="account-information" />
          <SettingsButton name="change-password" />
          <SettingsButton name="notifications" />
          <SettingsButton name="delete-account" />
        </Col>
        <Col xs={12} md={8} className="p-0">
          {
            (option === "account-information") &&
            <Collapse in={(option === "account-information")} dimension="width">
              <>
              <h4 className="right-settings-title">Account Information</h4>
              <Form>
                <InputGroup as={Row} className="right-settings-content">
                  <Form.Label column>Profile Picture</Form.Label>
                    {/* <Form.Control id="profile-picture" type="file" /> */}
                </InputGroup>
                <InputGroup as={Row} className="right-settings-content">
                  <Form.Label column sm={3}>Email</Form.Label>
                  <Col sm={9}>
                    <Form.Control type="email" placeholder="email" onChange={handleEmailChange}/>
                  </Col>
                </InputGroup>
                <InputGroup as={Row} className="right-settings-content">
                  <Form.Label column sm={3}>Username</Form.Label>
                  <Col sm={9}>
                    <Form.Control type="text" placeholder="username" onChange={handleUsernameChange}/>
                  </Col>
                </InputGroup>
                <InputGroup as={Row} className="right-settings-content">
                  <Form.Label column sm={3}>Display Name</Form.Label>
                  <Col sm={9}>
                    <Form.Control type="text" placeholder="display name" onChange={handleDisplayNameChange} />
                  </Col>
                </InputGroup>
                <InputGroup as={Row} className="right-settings-content">
                  <Form.Label column sm={3}>Description</Form.Label>
                  <Col sm={9}>
                    <Form.Control type="text" placeholder="description" onChange={handleDescriptionChange}/>
                  </Col>
                </InputGroup>
                <InputGroup as={Row} className="right-settings-content">
                  <Form.Label column sm={3}>Birthday</Form.Label>
                  <Col sm={3}>
                    <Form.Control type="text" placeholder="day" onChange={handleBirthdayDateChange}/>
                  </Col>
                  <Col sm={3}>
                    <Form.Control type="text" placeholder="month" onChange={handleBirthdayMonthChange}/>
                  </Col>
                  <Col sm={3}>
                    <Form.Control type="text" placeholder="year" onChange={handleBirthdayYearChange}/>
                  </Col>
                </InputGroup>
                
              </Form>
              <Form>
                <Form.Group as={Row} className="right-settings-content">
                  <Col className="d-flex justify-content-center">
                    <Button type="submit" onClick={UpdateAccountInformationHandler}>Save Changes</Button>
                  </Col>
                </Form.Group>
              </Form>
              </>
            </Collapse>
          }
          {
            (option === "change-password") &&
            <Collapse in={(option === "change-password")} dimension="width">
              <>
              <h4 className="right-settings-title">Change Password</h4>
              <Form>
                <InputGroup as={Row} className="right-settings-content">
                  <Form.Label column sm={3}>Password</Form.Label>
                  <Col sm={9}>
                    <Form.Control type="password" onChange={updatePassword}/>
                  </Col>
                </InputGroup>
                <InputGroup as={Row} className="right-settings-content">
                  <Form.Label column sm={3}>Repeat Password</Form.Label>
                  <Col sm={9}>
                    <Form.Control type="password" onChange={updateRepeatPassword}/>
                  </Col>
                </InputGroup>
              </Form>
              <Form>
                <Form.Group as={Row} className="right-settings-content">
                  <Col className="d-flex justify-content-center">
                    <Button type="submit" onClick={changePasswordHandler}>Change Password</Button>
                  </Col>
                </Form.Group>
              </Form>
              </>
            </Collapse>
          }
          {
            (option === "notifications") &&
            <Collapse in={(option === "notifications")} dimension="width">
            <>
            <h4 className="right-settings-title">Notifications</h4>
            <Form>
              <InputGroup as={Row} className="right-settings-content">
                <Form.Label column sm={9}>Show notifications on like</Form.Label>
                <Col sm={3}>
                  <Form.Check type="switch" className="d-flex justify-content-center align-items-center" />
                </Col>
              </InputGroup>
              <InputGroup as={Row} className="right-settings-content">
                <Form.Label column sm={9}>Show notifications on follow</Form.Label>
                <Col sm={3}>
                  <Form.Check type="switch" className="d-flex justify-content-center align-items-center" />
                </Col>
              </InputGroup>
            </Form>
            </>
            </Collapse>
          }
          {
            (option === "delete-account") &&
            <Collapse in={(option === "delete-account")} dimension="width">
            <>
            <h4 className="right-settings-title">Delete Account</h4>
            <h5 style={{margin: "15px"}}>Are you sure you want to delete your account?</h5>
            <Form>
              <Form.Group as={Row} className="right-settings-content">
                <Col className="d-flex justify-content-center">
                  <Button type="submit" variant="danger" onClick={deleteAccountHandler}>Delete Account</Button>
                </Col>
              </Form.Group>
            </Form>
            </>
            </Collapse>
          }
        </Col>
      </Row>
    </Container>
  </>
  );
}

export default SettingsPage;