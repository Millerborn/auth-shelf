import React, { Component}  from 'react';
import ReactDOM from 'react-dom'
const Uppy = require('@uppy/core')
const Tus = require('@uppy/tus')
const { DragDrop } = require('@uppy/react')

const uppy = Uppy({
  meta: { type: 'avatar' },
  restrictions: { maxNumberOfFiles: 1 },
  autoProceed: true
})

uppy.use(Tus, { endpoint: '/upload' })

uppy.on('complete', (result) => {
  const url = result.successful[0].uploadURL
  this.props.setUrl(url)
})

const AvatarPicker = ({ currentAvatar }) => {
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZK1K9XNu7C-VHMmRgUoR7haZupEyncnZ80zojIDfDLkEspe3f" alt="Current Avatar" />
      <DragDrop
        uppy={uppy}
        locale={{
          strings: {
            chooseFile: 'Pick a new avatar'
          }
        }}
      />
    </div>
  )
}

export default AvatarPicker