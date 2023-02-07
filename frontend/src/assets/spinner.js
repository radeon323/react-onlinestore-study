import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = <LoadingOutlined
    style={{ fontSize: 28, color: 'black' }}
    spin
/>

const RotateSpinner: React.FC = () =>
    <Spin
        indicator={antIcon}
    />

export default RotateSpinner