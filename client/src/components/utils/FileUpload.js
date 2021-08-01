import React from 'react'
import Dropzone from 'react-dropzone'
import { Icon } from 'antd'
import axios from 'axios';

function FileUpload() {
    const dropHandler = (files) => {
        //backend에 file 전달
        // 사진 관련 헤더 보내야함
        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        //append사용하여 배열로 보냄
        formData.append("file", files[0])
        axios.post('/api/product/image', formData, config)
            .then(response => {
                if (response.data.success) {

                } else { alert('파일을 저장하는데 실패했습니다.') }
            })
}
    return (
        <div style={{ display: 'flex', juustifyContnet: 'space-between' }}>
            <Dropzone onDrop={dropHandler}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div
                            style={{
                                width: 300, height: 240, border: '1px solid lightgray',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}
                            {...getRootProps()}>
                            <input {...getInputProps()} />
                            <Icon type="plus" style={{ fontSize: '3rem' }} />
                        </div>
                    </section>
                )}
            </Dropzone>
        </div>
    )
}

export default FileUpload
