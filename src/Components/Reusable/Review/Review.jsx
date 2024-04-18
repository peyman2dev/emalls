import _, { divide, template } from 'lodash'
import React from 'react'

export default function Review(props) {
    // console.log(props)
  return (
    <div className='my-10 first:mt-4'>
        <h5 className='font-price text-zinc-800 text-lg'>
            {props.title}
        </h5>
        <div className='mt-6'> 
                {
                    _.map(props.sections, (sect,index) => (
                        <div key={index} className='my-4'>
                            {/* {console.log(sect)} */}
                            {
                                sect.template.includes('image-text') ?
                                <img src={sect.image} className='sm:w-[400px] w-full mx-auto my-6 py-10' alt="" />
                                :
                              <p dangerouslySetInnerHTML={{__html: sect.text}}></p>
                            }
                        </div>
                    ))
                }
        </div>
    </div>
  )
}
