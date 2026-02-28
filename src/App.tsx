import { motion } from 'motion/react';
import { CheckCircle, UserPlus } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100"
      >
        <div className="bg-gradient-to-r from-green-600 to-blue-600 h-32 relative">
          {/* Header background */}
        </div>
        
        <div className="px-6 pb-8 pt-0 relative flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full border-4 border-white bg-slate-200 shadow-lg -mt-16 overflow-hidden mb-4 relative flex items-center justify-center">
            <img 
              src="https://photos.google.com/album/AF1QipNHG00QYbFABslHXgmm9A8CUucWAohe94fou9L8/photo/AF1QipO1ltUn-2p9-DMzk2JNfH5a4drOLjQhpUs6Y8ij" 
              alt="Audun Mama Kontagora 2"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if Google Photos link is not a direct image
                e.currentTarget.src = "https://picsum.photos/seed/candidate/400/400";
              }}
              referrerPolicy="no-referrer"
            />
          </div>
          
          <h1 className="text-2xl font-bold text-slate-900 mb-1 uppercase tracking-tight">
            Audun Mama Kontagora 2
          </h1>
          
          <div className="w-12 h-1 bg-green-500 rounded-full mb-6"></div>
          
          <p className="text-slate-700 text-lg mb-8 font-medium leading-relaxed">
            Is encouraging you to obtain your <span className="text-blue-600 font-bold">APC Membership Slip</span> and register your <span className="text-green-600 font-bold">Voter's Card</span> online.
          </p>
          
          <div className="w-full space-y-4">
            <a 
              href="https://cvr.inecnigeria.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-colors shadow-sm"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Register Voter's Card Online
            </a>
            
            <a 
              href="https://apc.com.ng/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors shadow-sm"
            >
              <UserPlus className="w-5 h-5 mr-2" />
              APC Official Website
            </a>
          </div>
          
          <p className="text-xs text-slate-400 mt-6">
            Your vote is your power. Register today.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
