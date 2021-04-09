import React from 'react';
import { render } from 'react-dom';
import { BasicLayout } from './Commons';

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

render(
    <BasicLayout />,
    document.getElementById('app')
);