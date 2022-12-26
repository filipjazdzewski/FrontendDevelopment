import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <h1>Kalkulator</h1>
      <p>/add?x=a&y=b - dla dodawania a+b</p>
      <p>/sub?x=a&y=b - dla odejmowania a-b</p>
      <p>/mul?x=a&y=b - dla mnożenia a*b</p>
      <p>/div?x=a&y=b - dla dzielenia a/b</p>
    </div>
  );
}

export function Add() {
  const [searchParams] = useSearchParams();
  const x = searchParams.get('x');
  const y = searchParams.get('y');
  const result = parseInt(x) + parseInt(y);

  return (
    <div>
      <h2>Addition</h2>
      <p>
        {x} + {y} = {result}
      </p>
    </div>
  );
}

export function Sub() {
  const [searchParams] = useSearchParams();
  const x = searchParams.get('x');
  const y = searchParams.get('y');
  const result = parseInt(x) - parseInt(y);

  return (
    <div>
      <h2>Subtraction</h2>
      <p>
        {x} - {y} = {result}
      </p>
    </div>
  );
}

export function Mul() {
  const [searchParams] = useSearchParams();
  const x = searchParams.get('x');
  const y = searchParams.get('y');
  const result = parseInt(x) * parseInt(y);

  return (
    <div>
      <h2>Multiplication</h2>
      <p>
        {x} * {y} = {result}
      </p>
    </div>
  );
}

export function Div() {
  const [searchParams] = useSearchParams();
  const x = searchParams.get('x');
  const y = searchParams.get('y');
  const result = parseInt(x) / parseInt(y);

  return (
    <div>
      <h2>Division</h2>
      <p>
        {x} / {y} = {result}
      </p>
    </div>
  );
}

export function Page404() {
  let location = useLocation();
  return (
    <div>
      <h1>Whoops! </h1>
      <h3>404, {location.pathname} Not Found</h3>
    </div>
  );
}
