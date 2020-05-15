import React from 'react'

function Hero() {
  return (
    <section
      className="font-sans h-screen w-full bg-center bg-cover text-center flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1581682693682-51df7c8ae820?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ")',
      }}
    >
      <div className="bg-white text-black rounded-full h-16 w-16 flex items-center justify-center mb-8">
        <i className="fas fa-play ml-1" />
      </div>
      <span className="uppercase tracking-extrawide text-white text-xs font-hairline mt-8">
        Watch Video
      </span>
      <h3 className="text-white mx-auto max-w-sm mt-4 font-normal text-2xl leading-normal">
        Differentiate Yourself And Attract More Attention Sales And Profits
      </h3>
    </section>
  )
}

export default Hero
