import React,{useState} from 'react'
import { Typography, Button, Form, Input } from 'antd';
//const { Title } = Typography;
const { TextArea } = Input;
function UploadProductPage() {
    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Price, setPrice] = useState(0)
    const [Continent, setContinent] = useState(1)
    const [image, setImage] = useState([])
    const titleChangeHandler=(event)=>{
        setTitle(event.currentTarget.value)
    }
    const descriptionChangeHandler=(event)=>{
        setDescription(event.currentTarget.value)
    }
    const priceChangeHandler=(event)=>{
        setPrice(event.currentTarget.value)
    }
    const imageChangeHandler=(event)=>{
        setImage(event.currentTarget.value)
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2>Upload Travel Product</h2>
            </div>
            <Form>
                {/*Drop Zone */}
                <br />
                <br />
                <label>Title</label>
                <Input onChange={titleChangeHandler} value={Title}/>
                <br />
                <br />
                <label>Description</label>
                <TextArea onChange={descriptionChangeHandler} value={Description}/>
                <br />
                <br />
                <label>Price($)</label>
                <Input type="number" onChange={priceChangeHandler} value={Price}/>
                <br />
                <br />
                <select>
                    <option>Africa</option>
                    <option>Europe</option>
                </select>
                <Button>
                    Submit
                </Button>
            </Form>
        </div>

    )
}
export default UploadProductPage
