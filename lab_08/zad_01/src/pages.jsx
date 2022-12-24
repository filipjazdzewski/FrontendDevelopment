import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to='about'>About </Link>
        <Link to='services'>Services </Link>
        <Link to='contact'>Contact </Link>
      </nav>
    </div>
  );
}

export function About() {
  return <h1>About</h1>;
}

export function Services() {
  return <h1>Services</h1>;
}

export function Contact() {
  return (
    <div>
      <nav>
        <Link to='us'>Us </Link>
        <Link to='pl'>Pl </Link>
        <Link to='de'>De </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export function Us() {
  return <h1>Us</h1>;
}

export function Pl() {
  return <h1>Pl</h1>;
}

export function De() {
  return <h1>De</h1>;
}

export function ErrorPage() {
  let location = useLocation();
  return <h1>Nie znaleziono elementu: {location.pathname}</h1>;
}
