import "./App.css";
import AvatarIMG from './assets/avatar.png';

function App() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-64 bg-white shadow-md">
          <div className="min-h-screen flex flex-col">
            <div className="bg-white px-8 pt-8 pb-4 flex justify-between">
              <h1 className="text-2xl font-semibold text-[38px] text-[#2AB7DD]">JIIBS.</h1>
              <i className="fas fa-caret-square-o-left">3</i>
            </div>
            <div className="flex-grow bg-white">
              <nav className="flex flex-col p-4">
                <a href="#" className="flex items-center py-2 px-4 text-gray-500 hover:text-gray-900">
                  <i className="fas fa-home mr-3"></i>
                  Home
                </a>
                <a href="#" className="flex items-center py-2 px-4 text-gray-500 hover:text-gray-900">
                  <i className="fas fa-building mr-3"></i>
                  Building
                </a>
                <a href="#" className="flex items-center py-2 px-4 bg-gray-100 text-gray-900 rounded-md">
                  <i className="fas fa-th mr-3"></i>
                  Units
                </a>
                <a href="#" className="flex items-center py-2 px-4 text-gray-500 hover:text-gray-900">
                  <i className="fas fa-inbox mr-3"></i>
                  Inbox
                </a>
                <a href="#" className="flex items-center py-2 px-4 text-gray-500 hover:text-gray-900">
                  <i className="fas fa-chart-line mr-3"></i>
                  Analytics
                </a>
                <a href="#" className="flex items-center py-2 px-4 text-gray-500 hover:text-gray-900">
                  <i className="fas fa-user-friends mr-3"></i>
                  Leads
                </a>
                <a href="#" className="flex items-center py-2 px-4 text-gray-500 hover:text-gray-900">
                  <i className="fas fa-question-circle mr-3"></i>
                  Help Center
                </a>
              </nav>
            </div>
            <div className="bg-white p-4">
              <div className="flex">
                <div className="flex-shrink-0 mr-3">
                  <img className="h-10 w-10 rounded-full" src={AvatarIMG} alt="Profile placeholder image"/>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="font-medium text-gray-700">Anagram Nomad</div>
                    <i className="fa fa-sign-out">3</i>
                  </div>
                  <div className="text-sm text-gray-500">Logout</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col overflow-hidden px-6 pt-12">
          <header className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-700">Units</h1>
            </div>
            <div className="flex items-center">
              <button className="text-white bg-blue-500 px-4 py-2 rounded shadow">Add Units</button>
            </div>
          </header>

          <div className="bg-white rounded my-6rounded-md border border-2">
            <div className="flex justify-between items-center p-4 border-b-2">
              <div className="flex space-x-2">
                <button className="px-2 py-1 active-tab">All</button>
                <button className="px-2 py-1 text-gray-600 hover:text-black focus:outline-none">On-Market</button>
                <button className="px-2 py-1 text-gray-600 hover:text-black focus:outline-none">Leased</button>
                <button className="px-2 py-1 text-gray-600 hover:text-black focus:outline-none">Draft</button>
              </div>

              <div className="flex items-center space-x-2">

                <div className="relative">
                  <button className="h-10 px-3 rounded-md text-sm focus:outline-none border">
                    <i className="fas fa-search"></i>
                  </button>
                </div>

                <button className="h-10 px-3 rounded-md text-sm focus:outline-none border">
                <i className="fas fa-align-justify"></i>
                </button>
              </div>

            </div>
            <table className="text-left w-full border-collapse">
              <thead className="bg-[#F7F7F7]">
                <tr>
                  <th className="py-2 px-6 text-sm text-grey-dark border-b border-grey-light">
                    <input type="checkbox" />
                  </th>
                  <th className="py-2 px-6 text-sm text-grey-dark border-b border-grey-light">Units</th>
                  <th className="py-2 px-6 text-sm text-grey-dark border-b border-grey-light">Status</th>
                  <th className="py-2 px-6 text-sm text-grey-dark border-b border-grey-light">Occupancy</th>
                  <th className="py-2 px-6 text-sm text-grey-dark border-b border-grey-light">Beds</th>
                  <th className="py-2 px-6 text-sm text-grey-dark border-b border-grey-light">Baths</th>
                  <th className="py-2 px-6 text-sm text-grey-dark border-b border-grey-light">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-grey-lighter">
                  <td className="py-4 px-6 border-b border-grey-light">
                    <input type="checkbox" />
                  </td>
                  <td className="py-4 px-6 border-b border-grey-light">121 Founders #1302</td>
                  <td className="py-4 px-6 border-b border-grey-light">
                    <span className="bg-green-200 text-green-700 py-1 px-3 rounded-full text-xs">On-Market</span>
                  </td>
                  <td className="py-4 px-6 border-b border-grey-light">Immediate</td>
                  <td className="py-4 px-6 border-b border-grey-light">1</td>
                  <td className="py-4 px-6 border-b border-grey-light">1</td>
                  <td className="py-4 px-6 border-b border-grey-light">$3500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
