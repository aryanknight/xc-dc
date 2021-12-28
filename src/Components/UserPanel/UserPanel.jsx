import { Avatar, Paper,TextField } from '@mui/material';
import React from 'react';
import User from '../../Images/user.png';
import './UserPanel.css';

export default function UserPanel() {
    return (
        <div className='panel'>
            <div className="container-medium">
                <div className="panel-cont">
                    <Paper elevation={3}>
                        <div className="panel-cont-1">
                            <Avatar sx={{ width: 80, height: 80 }} src={User} style={{marginRight:'20px'}}/>
                            <div>
                                <div className="panel-user-name">
                                    Abu Bin Ishtiyak
                                </div>
                                <div className="panel-user-email">
                                    info@softnio.com
                                </div>
                            </div>
                        </div>
                        <div className="panel-cont-2">
                            <div className="panel-head">
                                Personal Information
                            </div>
                            <div className="panel-para">
                                Basic info, like your name and address, that you can edit.
                            </div>
                        </div>
                        <div className="panel-cont-3">
                            <div className="panel-detail-head">
                                Full Name
                            </div>
                            <div className="panel-detail-val">
                                <TextField fullWidth={true} required placeholder="Your Full Namr" defaultValue="Abu Bin Ishtiyak" />
                            </div>

                            <div className="panel-detail-head">
                                Phone Number
                            </div>
                            <div className="panel-detail-val">
                                <TextField fullWidth={true} required placeholder="Phone No" defaultValue="8858984562" />
                            </div>

                            <div className="panel-detail-head">
                                Date of Birth
                            </div>
                            <div className="panel-detail-val">
                                <TextField fullWidth={true} required placeholder="Your Full Namr" defaultValue="29 Mar 2000" />
                            </div>

                            <div className="panel-detail-head">
                                Full Name
                            </div>
                            <div className="panel-detail-val">
                                <TextField fullWidth={true} required placeholder="Your Full Namr" defaultValue="Abu Bin Ishtiyak" />
                            </div>

                            <div className="panel-detail-head">
                                Phone Number
                            </div>
                            <div className="panel-detail-val">
                                <TextField fullWidth={true} required placeholder="Phone No" defaultValue="8858984562" />
                            </div>

                            <div className="panel-detail-head">
                                Date of Birth
                            </div>
                            <div className="panel-detail-val">
                                <TextField fullWidth={true} required placeholder="Your Full Namr" defaultValue="29 Mar 2000" />
                            </div>

                            <div className="panel-btn-cont">
                                <div className="panel-btn-1">
                                    Save changes
                                </div>
                                <div className="panel-btn-2">
                                    Reset
                                </div>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        </div>
    )
}