import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, Link as LinkIcon, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const VideoDownloader = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setStatus('idle');
    
    // Simulate API call for video processing
    setTimeout(() => {
      setLoading(false);
      if (url.includes('youtube.com') || url.includes('instagram.com') || url.includes('facebook.com')) {
        setStatus('success');
        setMessage('Video processed successfully! Your download will start shortly.');
        // In a real app, this would trigger a download from a backend service
      } else {
        setStatus('error');
        setMessage('Invalid URL or platform not supported. Please try a valid link.');
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <PageHeader 
        title="Video Downloader" 
        subtitle="Download high-quality videos from your favorite social media platforms instantly."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12"
        >
          <form onSubmit={handleDownload} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <LinkIcon className="h-5 w-5 text-zinc-500" />
              </div>
              <input
                type="url"
                placeholder="Paste video link here (YouTube, Instagram, Facebook...)"
                className="block w-full pl-12 pr-4 py-4 bg-black border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold rounded-xl hover:from-amber-500 hover:to-amber-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Download className="h-5 w-5" />
                  Download Video
                </>
              )}
            </button>
          </form>

          {status !== 'idle' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`mt-8 p-4 rounded-xl flex items-start gap-3 ${
                status === 'success' ? 'bg-green-500/10 border border-green-500/20 text-green-400' : 'bg-red-500/10 border border-red-500/20 text-red-400'
              }`}
            >
              {status === 'success' ? (
                <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
              )}
              <p className="text-sm font-medium">{message}</p>
            </motion.div>
          )}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'High Quality', desc: 'Download in 1080p, 2K, and 4K resolutions.' },
              { title: 'Fast Speed', desc: 'Optimized servers for lightning-fast downloads.' },
              { title: 'Multi-Platform', desc: 'Support for YT, FB, IG, and many more.' },
            ].map((feature, idx) => (
              <div key={idx} className="text-center p-4">
                <h3 className="text-amber-500 font-bold mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-zinc-500 text-sm">
            By using our service, you agree to our Terms of Service and Privacy Policy.
            We do not host any copyrighted content on our servers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoDownloader;
