import React from 'react'

function Industries() {
  return (
    <>
    <section>
        <div className='flex justify-between items-center px-4'>
            <div>
                <div className="flex gap-2 justify-center items-center pt-4 relative right-42">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div>

              <h1 className="font-semibold text-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                Industries we serve
              </h1>
            </div>
            <h4 className='text-4xl font-semibold flex flex-col pt-6'><span>Industries Where ai is optimizing</span><span>the Processes</span></h4>
            </div>
            <div>
                <h6 className="text-[var(--text-primary)] text-sm flex flex-col space-y-2">
  <span> Our AI agency is a cutting-edge technology partner that specializes in delivering </span>
    <span>artificial intelligence solutions to help businesses streamline operations,</span>
  <span>improve decision-making, and enhance customer experiences. By leveraging the power </span>
  <span>of AI,we aim to revolutionize industries.</span>
</h6>
            </div>
        </div>
    </section>
    </>
  )
}

export default Industries
