async function loginFormHandler(e) {
  e.preventDefault();

  const email = document.querySelector('#email_login').value.trim();
  const password = document.querySelector('#password_login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

async function signupFormHandler(e) {
  e.preventDefault();

  const username = document.querySelector('#username_signup').value.trim();
  const email = document.querySelector('#email_signup').value.trim();
  const password = document.querySelector('#password_signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        email,
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.login_form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup_form').addEventListener('submit', signupFormHandler);