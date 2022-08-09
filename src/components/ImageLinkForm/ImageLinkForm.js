import './ImageLinkForm.css';

const ImageLinkForm = (props) => {
    return (
        <div>
            <p>Here is my form to insert images</p>
            <div className='form'>
                <input  type='text' onChange = {props.onInputChange} />
                <button onClick= {props.onButtonClick} >Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;