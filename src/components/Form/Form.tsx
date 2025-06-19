import { useState } from 'react'
import Swal from 'sweetalert2'
import validator from 'validator'
import { Container, ContainerSucces } from './styles'
import axiosInstance from '../../api/axiosInstance' // Adjust as needed

export function Form() {
  const [validEmail, setValidEmail] = useState(false)
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function verifyEmail(email: string) {
    setValidEmail(validator.isEmail(email))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string

    setLoading(true)

    try {
      const res = await axiosInstance.post('/api/contact', {
        email,
        message,
      })

      if (res.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Email Sent!',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
          background: '#e6f9ea',
          color: '#2e7d32',
          iconColor: '#2e7d32',
        })
        setSubmitted(true)
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: res.data.error || 'Something went wrong.',
        })
      }
    } catch (err: any) {
      Swal.fire({
        icon: 'error',
        title: 'Failed!',
        text: err?.response?.data?.error || 'Failed to send email.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {submitted ? (
        <ContainerSucces>
          <h3>Thanks for getting in touch!</h3>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to the top
          </button>
        </ContainerSucces>
      ) : (
        <Container>
          <h2>Get in touch using the form</h2>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              id="email"
              type="email"
              name="email"
              onChange={(e) => verifyEmail(e.target.value)}
              required
            />
            <textarea
              required
              placeholder="Send a message to get started."
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              disabled={!validEmail || !message || loading}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </Container>
      )}
    </>
  )
}
