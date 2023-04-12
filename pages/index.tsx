import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const steps: { id: number, title: string, desc: string }[] = [
    {
      id: 1,
      title: 'Nail Your Sales Funnel Strategy',
      desc: `In order to plan your sales funnel strategy effectively, it is crucial to have a clear understanding of your target audience. Attempting to target two distinct audiences simultaneously is not advisable.
      A sales funnel strategy is essential for maintaining a steady flow of leads and sales during your launch and for any evergreen programs or courses.
      Essentially, a sales funnel refers to the journey of converting a stranger into a customer. A sales funnel should ideally include a lead magnet or freebie landing page to grow your email list and generate leads, a low-ticket front-end offer sales page, a mid-range offer sales page, and a high-ticket offer sales page.
      However, it is not necessary to market all of these offers. Instead, you can launch the low-ticket/mid-range program and then upsell the customers for the other higher-priced offers. The primary objective is to provide value to potential customers before requesting a higher amount. It is important to connect all of your offers, from the freebie to the high-ticket offer, and determine which offers need to be marketed at each step, depending on your industry.`
    },
    {
      id: 2,
      title: 'Get your Lead Generation System Right',
      desc: `If you are not filling in your audience with the right people. You are wasting time in the business. Email lists are such an important asset for any online business. 
      In all the funnels we will be taking in the leads first and then will be redirected to the further step`
    },
    {
      id: 3,
      title: 'Run ads to attract people into your sales funnel',
      desc: `Once you have figured out who your target audience is, make your customer AVATAR. Once you have this in place you can starting finding the right audience targeting in Facebook.
      Make sure you try different permutations and combinations for audiences in different ad sets to figure out which audience works the best for you. 
      Make sure to use ABO strategy when using multiple audience`
    },
    {
      id: 4,
      title: 'Use Specific Messaging on your ads to highlight your USP',
      desc: `FIND Your USP and highlight that in your ads. These days all platforms are video sharing & these days Video ads work the best. 
      Also long form copy with tons of details and story. People love stories and they have always loved it. Tell stories in your ad copies.`
    },
    {
      id: 5,
      title: 'Nurture your audience with 100% converting email sequence',
      desc: `Email marketing is such an important step for online marketing. But many business owners tend to miss it. If you don’t have it in place you are doing something.`
    }
  ];

  return (
    <main className="min-h-screen">
      <div className='relative w-full h-screen max-h-[50vh] object-cover'>
        <div className='text-white absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4'>
          <div className='text-center text-lg'>
            FREE GUIDE BY AISHWARYA SONI
          </div>
          <div className='h-px w-40 bg-white'></div>
          <div className='text-2xl sm:text-5xl text-center font-bold '>Exact Roadmap to hit $100K</div>
          <div className='text-center text-sm'>A step-by-step guide with all the strategies I used to make $100K - for free!</div>
        </div>
        <Image src={`/Group.jpg`} alt='some data' fill className='object-cover'/>
      </div>
      <div className='px-10 py-5 flex flex-col gap-8 sm:px-40 sm:py-20'>
        <div className='flex flex-col gap-4 sm:gap-8'>
          <h1 className='text-5xl font-semibold text-slate-800'>👋Hey! I&apos;m Aishwarya</h1>
          <p className='text-sm text-slate-600'>Hey, I am Aishwarya Soni - Business Consultant & Money Mindset Coach, Wife, Travel Junky & a Coffee Maniac. Over the past 6 years of being in this industry, I have helped over 300+ business owners all over the world to grow their business to 6 & 7 Figures using Paid ads, funnels and emails. And with this guide I can&apos;t wait to help you to do the same.</p>
        </div>
        <div className='flex flex-col gap-4 sm:gap-4'>
          <h2 className='text-3xl font-semibold text-slate-800'>Why Facebook is the fastest way to get clients</h2>
          <h4 className='text-lg text-slate-600'>Facebook ads are considered one of the fastest ways to get clients for several reasons. Here are some of them.</h4>
          <ol className='text-sm flex flex-col gap-2 text-slate-600 sm:gap-4'>
            <li>
              <span className='font-semibold'>Wide reach: </span> 
              Facebook has over 2.8 billion active users, which means your ad has the potential to reach a vast audience, making it an excellent platform for businesses to promote their products or services.</li>
            <li>
              <span className='font-semibold'>Targeted advertising: </span>  
              Facebook ads allow you to target specific demographics, interests, behaviors, and locations, making it easier to reach your ideal clients.</li>
            <li>
              <span className='font-semibold'>Cost-effective: </span>  
              Facebook ads are relatively inexpensive compared to traditional advertising methods, such as TV or print ads, making it more accessible for small businesses with a limited marketing budget.</li>
            <li>
              <span className='font-semibold'>Fast results: </span>  
              Unlike SEO or content marketing, which can take time to generate results, Facebook ads can quickly deliver leads and customers to your business.</li>
            <li>
              <span className='font-semibold'>Easy to create and optimize: </span>  
              Facebook&apos;s ad platform is user-friendly, making it easy to create and optimize ads quickly. You can also track and analyze the performance of your ads in real-time, allowing you to make adjustments to improve their effectiveness.</li>
          </ol>
          <div className='text-sm text-slate-600'>In conclusion, Facebook ads offer a quick and effective way for businesses to reach a wide audience, target their ideal customers, and generate leads and customers in a cost-effective manner. In this guide i am telling you the exact roadmap I use for myself and my clients. Stay Tuned!!</div>
        </div>
        <div className='flex flex-col gap-8'>
          <h2 className='text-3xl font-semibold text-slate-800'>THE ULTIMATE ROADMAP TO GET CLIENTS FROM FACEBOOK</h2>
          <ol className='flex flex-col gap-2'>
            {
              steps.map((item) => {
                return (
                  <li key={item.id} className='flex gap-4'>
                    <div className='font-semibold text-slate-800'>Step {item.id}:</div>
                    <div className='text-slate-600'>
                      { item.title }
                    </div>
                  </li>
                  );
              })
            }
          </ol>
          <ol className='flex flex-col gap-4 sm:gap-8'>
            {
              steps.map((item) => {
                return (
                  <li key={ item.id } className='flex flex-col gap-2 sm:gap-4'>
                    <h4 className='text-xl font-semibold text-slate-800'>{ item.title }</h4>
                    <p className='text-sm text-slate-600'>{ item.desc }</p>
                  </li>
                );
              })
            }
          </ol>
        </div>
      </div>
    </main>
  )
}
