
import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Breadcrumb } from "matx";
import { Form } from "react-bootstrap";
import {
    Button,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import makeAnimated from 'react-select/animated';
import Select from 'react-select';

import MapLocation from '../maps/MapLocation';
import MesssageDailog from 'app/views/dailog/dailogMessage/MessageDailog';
import WarningIcon from '@material-ui/icons/Warning';
import { useHistory } from 'react-router';

const useStyles = makeStyles(theme => ({
    formStyle: {
        border: '1px solid silver',
        padding: '10px'
    }
}));

const animatedComponents = makeAnimated();
let maplocationDetails = {};
let successMessage = false;

const AddCustomer = () => {

    const classes = useStyles();
    const history = useHistory();

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const [customerAddForm, setCustomerAddForm] = React.useState({
        customerName: '',
        dob: '',
        phoneNumberone: '',
        email: '',
        phoneNumbertwo: '',
        addressone: '',
        addresstwo: '',
    });

    const [localityValue, setLocalityValue] = useState();
    const [localityTypeValue, setLocalityTypeValue] = useState();

    const localities = [
        { value: "addlocality", label: "Add Locality  + ", id: 0, state: 0 },
        { value: "localityone", label: "locality One", id: 1 },
        { value: "localitytwo", label: "locality Two", id: 2 },
        { value: "localitythree", label: "locality Three", id: 3 }
    ];

    const localityTypes = [
        { value: "na", label: "NA", id: 1 },
        { value: "silver", label: "Silver", id: 2 },
        { value: "copper", label: "Copper", id: 3 },
        { value: "gold", label: "Gold", id: 4 },
        { value: "platinum", label: "Platinum", id: 5 }
    ];

    const handleClose = () => {
        setOpen(false);
    }

    function handleMaplocation(maplocadtion) {
        maplocationDetails = maplocadtion;
    }

    function onChangecustomerData(event) {
        setCustomerAddForm({
            ...customerAddForm,
            [event.target.name]: event.target.value
        })
    }

    const localityhandleChange = (value) => {
        for (let i = 0; i < value.length; i++) {
            if (value[i].id === 0 && value[i].state === 0) {
                history.push({
                    pathname: '/locality/localitylist',
                    state: {
                        name: 'addlocality',
                        id: 0,
                        page: 'addcustomer'
                    }
                });
            }
        }
        setLocalityValue(value);
    };

    const localityTypehandleChange = (value) => {
        setLocalityTypeValue(value);
    };

    function onloadSubmitForm() {
        if (localityValue === null || customerAddForm.customerName === "" || customerAddForm.phoneNumberone === "" ||
            customerAddForm.email === "" || customerAddForm.addressone === "" ||
            customerAddForm.addresstwo === "" || customerAddForm.email === "" || localityTypeValue === null) {
            setOpen(true);
        } else {
            setCustomerAddForm({
                customerName: '',
                dob: '',
                phoneNumberone: '',
                email: '',
                phoneNumbertwo: '',
                addressone: '',
                addresstwo: '',
            })
            setLocalityValue(null);
            setLocalityTypeValue(null);
            successMessage = true;
        }
    }

    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: "Add Customer", path: "/customer/addcustomer" },
                        { name: "Customers" }
                    ]}
                /><hr></hr>
                <Form className={classes.formStyle}>
                    <div className="row">
                        <strong> Add Customer - </strong><hr></hr>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Form.Group>
                                <Form.Label>Locality<sup>*</sup></Form.Label>
                                <Select
                                    isMulti
                                    name="form-field-name"
                                    value={localityValue}
                                    onChange={localityhandleChange}
                                    options={localities}
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <Form.Group>
                                <Form.Label>Name<sup>*</sup></Form.Label>
                                <Form.Control type="text"
                                    placeholder="Customer Name "
                                    name="customerName"
                                    value={customerAddForm.customerName}
                                    onChange={onChangecustomerData}
                                />
                            </Form.Group>
                        </div>

                        <div className="col-sm-6">
                            <Form.Group>
                                <Form.Label>DOB </Form.Label>
                                <Form.Control type="date"
                                    placeholder="DOB"
                                    name="dob"
                                    value={customerAddForm.dob}
                                    onChange={onChangecustomerData}
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <Form.Group>
                                <Form.Label>Phone Number 1 <sup>*</sup></Form.Label>
                                <Form.Control type="text"
                                    placeholder="Phone Number 1"
                                    name="phoneNumberone"
                                    value={customerAddForm.phoneNumberone}
                                    onChange={onChangecustomerData}
                                />
                            </Form.Group>
                        </div>

                        <div className="col-sm-6">
                            <Form.Group>
                                <Form.Label>Email<sup>*</sup></Form.Label>
                                <Form.Control type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={customerAddForm.email}
                                    onChange={onChangecustomerData}
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <Form.Group>
                                <Form.Label>Phone Number 2 </Form.Label>
                                <Form.Control type="text"
                                    placeholder="Phone Number 2"
                                    name="phoneNumbertwo"
                                    value={customerAddForm.phoneNumbertwo}
                                    onChange={onChangecustomerData}
                                />
                            </Form.Group>
                        </div>

                        <div className="col-sm-6">
                            <Form.Group>
                                <Form.Label>Locality Type<sup>*</sup></Form.Label>
                                <Select
                                    isMulti
                                    name="form-field-name"
                                    value={localityTypeValue}
                                    onChange={localityTypehandleChange}
                                    options={localityTypes}
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address 1 <sup>*</sup></Form.Label>
                                <Form.Control placeholder="Address 1"
                                    name="addressone"
                                    value={customerAddForm.addressone}
                                    onChange={onChangecustomerData} />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Address 2 <sup>*</sup></Form.Label>
                                <Form.Control placeholder="Address 2"
                                    name="addresstwo"
                                    value={customerAddForm.addresstwo}
                                    onChange={onChangecustomerData} />
                            </Form.Group>
                        </div>
                    </div>
                </Form>

                <div>
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogTitle id="responsive-dialog-title">
                            {"Alert Message !! "}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <WarningIcon color="secondary" fontSize="large" />
                                Please fill the required fields
                            </DialogContentText>
                        </DialogContent>

                        <DialogActions>
                            <Button onClick={handleClose} color="primary" autoFocus>
                                OK
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
            <div style={{ border: '1px solid silver', padding: '10px' }}>
                <strong>Geo Location Details -</strong><hr></hr>
                <MapLocation
                    // google = {}
                    center={{ lat: 12.9713424, lng: 77.5958782 }}
                    height='300px'
                    zoom={15}
                    handleMaplocation={handleMaplocation}
                />
            </div>

            <div className="row" style={{ marginTop: '80px', justifyContent: 'center' }}>
                <hr></hr>
                <Button variant="contained" onClick={onloadSubmitForm} style={{ width: '20%' }} color="primary">Submit</Button>
            </div>
            <div>
                {successMessage ? <MesssageDailog message="Customer Addedd Successfully"
                    alert="Suceess" status="1" /> : null}
            </div>
        </div>
    );
}
export default AddCustomer;
