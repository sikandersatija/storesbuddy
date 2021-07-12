import React from 'react';
import ImageUploading from 'react-images-uploading';
import {
    IconButton,
    Button,
    makeStyles,

} from "@material-ui/core";
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ClearIcon from '@material-ui/icons/Clear';
import UpdateIcon from '@material-ui/icons/Update';

const useStyles = makeStyles(theme => ({
    imageStyle: {
        marginTop: '30px',
    }
}));

export function ImageUpload(props) {

    const classes = useStyles();
    if (props.multi == true) {
        var {
            onloadMultiImageUpload
        } = props
    } else {
        var {
            onloadImageUpload
        } = props
    }


    const [images, setImages] = React.useState([]);
    const [multiImages, setMultiImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {

        setImages(imageList);

        onloadImageUpload(imageList);
    };

    const onChangeMultipleImage = (imageList, addUpdateIndex) => {
        setMultiImages(imageList);
        onloadMultiImageUpload(imageList);
    }

    return (
        <div>
            {props.multi === true ? <div>

                <ImageUploading
                    multiple
                    value={multiImages}
                    onChange={onChangeMultipleImage}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                >
                    {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                    }) => (
                        <div className="upload__image-wrapper" style=
                            {{
                                border: "1px solid silver",
                                padding: '20px 10px 21px 10px',
                            }}>
                            <Button variant="contained" color="primary"
                                style={isDragging ? { color: 'red' } : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                            >
                                <CameraAltIcon fontSize="large" />
                            </Button>

                        &nbsp;
                            <Button variant="contained" color="secondary" onClick={onImageRemoveAll}>
                                <ClearIcon fontSize="large" />
                            </Button>
                            {imageList.map((image, index) => (
                                <div key={index} className="row">
                                    <div className="col-sm-7" style={{ marginTop: '30px' }}>
                                        <img src={image['data_url']} alt="" height="100" width="150" />
                                    </div>

                                    <div className="col-sm-3" style={{ marginTop: '30px' }}>
                                        <div className="col-sm-6" >
                                            <Button variant="contained" color="primary" onClick={() => onImageUpdate(index)}><UpdateIcon /></Button>
                                        </div>

                                        <div className="col-sm-6" style={{ marginTop: '5px' }}>
                                            <Button variant="contained" color="secondary" onClick={() => onImageRemove(index)}><ClearIcon /></Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </ImageUploading>

            </div> : <div>
                <ImageUploading
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                >
                    {({
                        imageList,
                        onImageUpload,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                    }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                            {images.length === 0 ? <div style={{
                                border: '1px solid silver',
                                padding: '21px 0px 21px 111px'
                            }}>
                                <Button variant="contained" color="primary"
                                    style={isDragging ? { color: 'red' } : undefined}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                >
                                    <CameraAltIcon fontSize="large" />

                                </Button>
                            </div> : <div>
                                &nbsp;
                            {imageList.map((image, index) => (
                                <div key={index} className="row" style={{
                                    border: '1px solid silver',
                                    padding: '10px',
                                    marginTop: '-25px'
                                }}>
                                    <div className="col-sm-7">
                                        <img src={image['data_url']} alt="" height="100" width="150" />
                                    </div>

                                    <div className="col-sm-3">
                                        <div className="col-sm-6" >
                                            <Button variant="contained" color="primary" onClick={() => onImageUpdate(index)}><UpdateIcon /></Button>
                                        </div>

                                        <div className="col-sm-6" style={{ marginTop: '5px' }}>
                                            <Button variant="contained" color="secondary" onClick={() => onImageRemove(index)}><ClearIcon /></Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>}
                        </div>
                    )}
                </ImageUploading>
            </div>}

        </div>
    );
}