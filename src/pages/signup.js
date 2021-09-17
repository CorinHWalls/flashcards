import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'

export default function SignupScreen() {
    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form>
                    <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control id='email' type='email'  required />
                    </Form.Group>

                    <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control id='password' type='Password' required />
                    </Form.Group>

                    <Form.Group >
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control id='password-confirm' type='Password' required />
                    </Form.Group>

                </Form>
                <div className='pt-4'>
                <Button className='w-100' type='submit'>Sign Up</Button>
                </div>
                    
            </Card.Body>
        </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Log in
            </div>
        </>
    )
}


