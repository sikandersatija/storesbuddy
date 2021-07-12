

import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Breadcrumb } from "matx";
import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import {
    Button,
} from "@material-ui/core";
import axios from 'axios';
import Config from '../../config';
import { Slide } from '@progress/kendo-react-animation';
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    radiobtn: {
        border: '1px solid silver',
        paddingLeft: '10px',
        borderRadius: '4px'
    },
    submitbtn: {
        float: 'right'
    },
    styleformbox: {
        border: '1px solid silver',
        padding: '10px',
    }
}));

var allSKUList = new Array();
var showDailog = false;

const ProductSKUAddition = (props) => {
    const [openskuaddition, SetOpenskuaddition] = React.useState(true);

    const history = useHistory();
    const classes = useStyles();
    const location = useLocation();
    
    useEffect(() => {  
        if (openskuaddition === true) {
            onEnter(0)
            SetOpenskuaddition(false);
        }
    })

    const GreenRadio = withStyles({
        root: {
            color: green[400],
            "&$checked": {
                color: green[600]
            }
        },
        checked: {}
    })(props => <Radio color="default" {...props} />);

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const [selectedValue, setSelectedValue] = React.useState({
        no: '',
        yes: '1'
    });

    function handleChange(event) {
        if (event.target.value === '1') {
            setSelectedValue({
                yes: '1',
            })
        } else {
            setSelectedValue({
                no: '0',
            })
        }
    }

    const [allskuValues, setAllskuValues] = React.useState([])

    const [show, setShow] = React.useState(false);
    const [callbackCalls, setCallbackCalls] = React.useState([]);

    const [addSkuValues, setAddSkuValues] = React.useState(
        {
            packageSize: '',
            productMrp: '',
            skuCode: '',
            strikePrice: '',
            skuBarcode: '',
            qtySkumf: '',
            qtyPriceper: ''
        }
    );

    const onClick = () => {
        setShow(!show);
    };

    const onEnter = event => {
        const calls = callbackCalls.slice();
        calls.unshift("");
        setCallbackCalls(calls);

        setAllskuValues({
            ...allskuValues,
            addSkuValues
        })

        if (event !== 0) {
            if (addSkuValues.packageSize === "" || addSkuValues.productMrp === "" ||
                selectedValue.yes === "1" && addSkuValues.qtySkumf === "") {
                setOpen(true);
                showDailog = true;
            } else {
                const data = addSkuValues;
                data["product_id"] = history.location.state.prodId;
                const headers = {
                    "Access-Control-Allow-Origin": "*",
                  }
                 axios.post(`${Config.baseURL}/v1/addsku`, data ,{headers}).then(() => {
                   console.log("sent");
                 }).catch(() => {
                    console.log("Something went wrong. Plase try again later");
                });
                allSKUList.push(addSkuValues);
                setAddSkuValues({
                    packageSize: '',
                    productMrp: '',
                    skuCode: '',
                    strikePrice: '',
                    skuBarcode: '',
                    qtySkumf: '',
                    qtyPriceper: ''
                })
                setOpen(false);
            }
        }
    };

    function onBackToProductPage() {
        history.push({ pathname: '/products/addproduct' })
    }

    function onChangeSkuAddition(event) {
        setAddSkuValues({
            ...addSkuValues,
            [event.target.name]: event.target.value
        })
    }

    function onLoadSubmitSKU() {
        console.log(location);
        console.log(allSKUList);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const renderLogs = () => {
        return (<div>
            <Form className={classes.styleformbox}>
                <div className="row">
                    <strong> SKU - </strong><hr></hr>
                    <div className="col-sm-6">
                        <Form.Group>
                            <Form.Label>Package Size<sup>*</sup></Form.Label>
                            <Form.Control type="text"
                                placeholder="Package Size "
                                name="packageSize"
                                value={addSkuValues.packageSize}
                                onChange={onChangeSkuAddition} />
                        </Form.Group>
                    </div>

                    <div className="col-sm-6">
                        <Form.Group>
                            <Form.Label>Product MRP<sup>*</sup></Form.Label>
                            <Form.Control type="text" placeholder="Product MRP"
                                name="productMrp"
                                value={addSkuValues.productMrp}
                                onChange={onChangeSkuAddition} />
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <Form.Group>
                            <Form.Label>SKU Code</Form.Label>
                            <Form.Control type="text" placeholder="SKU Code "
                                name="skuCode"
                                value={addSkuValues.skuCode}
                                onChange={onChangeSkuAddition} />
                        </Form.Group>
                    </div>

                    <div className="col-sm-6">
                        <Form.Group>
                            <Form.Label>Strike Price</Form.Label>
                            <Form.Control type="text" placeholder="Strike Price"
                                name="strikePrice"
                                value={addSkuValues.strikePrice}
                                onChange={onChangeSkuAddition} />
                        </Form.Group>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <Form.Group>
                            <Form.Label>Quantity Editable<sup>*</sup></Form.Label>
                            <div className={classes.radiobtn}>
                                <label>YES</label>
                                <Radio
                                    checked={selectedValue.yes === '1'}
                                    onChange={handleChange}
                                    value={selectedValue.yes}
                                    name="yes"
                                    inputProps={{ "aria-label": "active" }}
                                />
                                <label>NO</label>
                                <Radio
                                    checked={selectedValue.no === '0'}
                                    onChange={handleChange}
                                    value={selectedValue.no}
                                    name="no"
                                    inputProps={{ "aria-label": "inactive" }}
                                />
                            </div>
                        </Form.Group>
                    </div>
                    <div className="col-sm-6">
                        <Form.Group>
                            <Form.Label>SKU Bar-code</Form.Label>
                            <Form.Control type="text" placeholder="SKU Bar-code "
                                name="skuBarcode"
                                value={addSkuValues.skuBarcode}
                                onChange={onChangeSkuAddition} />
                        </Form.Group>
                    </div>
                </div>

                <div>
                    {selectedValue.yes === '1' ? <div className="row">
                        <div className="col-sm-6">
                            <Form.Group>
                                <Form.Label>SKU MF (Qty per Kg)<sup>*</sup></Form.Label>
                                <Form.Control type="text" placeholder="SKU MF "
                                    name="qtySkumf"
                                    value={addSkuValues.qtySkumf}
                                    onChange={onChangeSkuAddition} />
                            </Form.Group>
                        </div>

                        <div className="col-sm-6">
                            <Form.Group>
                                <Form.Label>Price Per kg/lt (Auto generated)</Form.Label>
                                <Form.Control type="text" placeholder="Price Per kg/lt "
                                    name="qtyPriceper"
                                    value={addSkuValues.qtyPriceper}
                                    onChange={onChangeSkuAddition} />
                            </Form.Group>
                        </div>
                    </div> : null}
                </div>
            </Form><br></br>
        </div>
        )
    };

    const children = show ? <div className="content">CONTENT</div> : null;
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: "SKU Addition", path: "/products/skuaddition" },
                        { name: "Inventory" }
                    ]}
                /><hr></hr>

                <div>
                    <div className="col-md-6 col-sm-6 animation-wrapper">
                        <Slide onEnter={onEnter}>
                            {children}
                        </Slide>
                    </div>

                    <div className="row">
                        <ul className="event-log">
                            {renderLogs()}
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <Button variant="contained" color="primary"
                            onClick={onEnter} >Save & Add New SKU </Button>
                    </div>
                </div><hr></hr>

                <div className="row">
                    <div className="col-sm-6">
                        <Button variant="contained" color="secondary" onClick={onBackToProductPage}>
                            Back
                            </Button>
                    </div>
                    <div className="col-sm-6">
                        <Button className={classes.submitbtn} variant="contained" color="primary" type="submit"
                            onClick={onLoadSubmitSKU}>
                            Submit
                        </Button>
                    </div>
                </div>

                <div>
                    {showDailog ? <div>
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
                                    Please fill the required fields
                            </DialogContentText>
                            </DialogContent>

                            <DialogActions>
                                <Button onClick={handleClose} color="primary" autoFocus>
                                    OK
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </div> : null}
                </div>

            </div>
        </div>
    );
}
export default ProductSKUAddition;