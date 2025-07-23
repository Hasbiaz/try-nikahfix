import React, { forwardRef, useEffect, useRef, useState } from 'react';
import supabase from '../../../lib/supabaseClient';
import badwords from 'indonesian-badwords';

const WishItem = forwardRef(({ name, message, color }, ref) => (
  <div ref={ref} className="flex gap-2">
    <div>
      <img
        width={24}
        height={24}
        src="images/face.png"
        style={{
          backgroundColor: color,
          minWidth: 24,
          minHeight: 24,
        }}
        className=" rounded-sm"
      />
    </div>
    <div>
      <p className="text-white text-md -mt-1">{name}</p>
      <p className="text-xs text-[#A3A1A1]">{message}</p>
    </div>
  </div>
));

const colorList = ['red', '#ffdb58', '#6bc76b', '#48cae4'];

const emoticons = [
  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃',
  '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '😚', '😙',
  '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔',
  '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔',
  '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥵',
  '🥶', '🥴', '😵', '🤯', '🤠', '🥳', '😎', '🤓', '🧐', '😕',
  '😟', '🙁', '☹️', '😮', '😯', '😲', '😳', '🥺', '😦', '😧',
  '😨', '😰', '😥', '😢', '😭', '😱', '😖', '😣', '😞', '😓',
  '😩', '😫', '🥱', '😤', '😡', '😠', '🤬', '😈', '👿', '💀',
  '☠️', '💩', '🤡', '👹', '👺', '👻', '👽', '👾', '🤖', '😺',
  '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '❤️', '🧡',
  '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕',
  '💖', '💗', '💘', '💝', '💞', '💟', '👍', '👎', '👌', '🤏',
  '✌️', '🤞', '🤟', '🤘', '🤙', '👈', '👉', '👆', '🖕', '👇',
  '☝️', '👏', '🙌', '👐', '🤲', '🤝', '🙏', '✍️', '💅', '🎉',
  '🎊', '🎈', '🎁', '🎀', '🌹', '🌺', '🌸', '🌼', '🌻', '💐'
];

export default function WishSection() {
  const lastChildRef = useRef(null);
  const emoticonRef = useRef(null);

  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showEmoticons, setShowEmoticons] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emoticonRef.current && !emoticonRef.current.contains(event.target)) {
        setShowEmoticons(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const addEmoticon = (emoticon) => {
    setMessage(prev => prev + emoticon);
    setShowEmoticons(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.length < 3) {
      setError('Nama minimal 3 karakter!');
      return;
    }

    if (message.length < 10) {
      setError('Pesan minimal 10 karakter!');
      return;
    }

    if (badwords.flag(name)) {
      setError('Gabolah kata kasar!');
      return;
    }

    setLoading(true);
    setError(null);

    // random color based data length
    const randomColor = colorList[Math.floor((data.length * Math.random()) % colorList.length)];
    const newmessage = badwords.censor(message);
    const { error } = await supabase
      .from(import.meta.env.VITE_APP_TABLE_NAME) // Replace with your actual table name
      .insert([
        { name, message: newmessage, color: randomColor }, // Assuming your table has a "name" column
      ]);

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      //scroll to .wish-container last child

      fetchData();
      setTimeout(scrollToLastChild, 500);
      setName('');
      setMessage('');
    }
  };

  const fetchData = async () => {
    const { data, error } = await supabase
      .from(import.meta.env.VITE_APP_TABLE_NAME) // Replace 'your_table' with the actual table name
      .select('name, message, color');

    if (error) console.error('Error fetching data: ', error);
    else setData(data);
  };

  const scrollToLastChild = () => {
    if (lastChildRef.current) {
      lastChildRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-lg leading-5 text-white font-bold mb-2">
        Wish for the couple
      </h2>
      <div
        className="max-h-[20rem] overflow-auto space-y-4 wish-container custom-scroll"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#ef4444 #222',
        }}
      >
        {data.map((item, index) => (
          <WishItem
            name={item.name}
            message={item.message}
            color={item.color}
            key={index}
            ref={index === data.length - 1 ? lastChildRef : null}
          />
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        {error && <div className="text-red-500 text-sm">{error}</div>}

        <div className="space-y-1">
          <label>Name</label>
          <input
            required
            minLength={3}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg focus:outline-none px-2 py-1 text-black"
            placeholder="Your Name"
          />
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <label>Message</label>
            <button
              type="button"
              onClick={() => setShowEmoticons(!showEmoticons)}
              className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Emoticons</span>
            </button>
          </div>
          <div className="relative" ref={emoticonRef}>
            <textarea
              required
              minLength={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (!isMobile && e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              className="w-full rounded-lg focus:outline-none px-2 py-1 text-black transition-colors"
              rows={4}
              placeholder={isMobile ? "Type your message here..." : "Press Enter to send, Shift+Enter for new line"}
            ></textarea>
            {showEmoticons && (
              <div className="absolute bottom-full left-2 right-2 bg-white border-2 border-red-500 rounded-xl shadow-2xl max-h-48 z-50 mb-2 backdrop-blur-sm emoticon-scroll flex flex-col">
                <div className="flex-1 overflow-y-auto px-3">
                  <div className="grid grid-cols-6 sm:grid-cols-8 gap-1 pb-2">
                    {emoticons.map((emoticon, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => addEmoticon(emoticon)}
                        className="text-lg sm:text-xl hover:bg-red-100 hover:scale-110 rounded-lg p-1.5 sm:p-2 transition-all duration-150 transform active:scale-95 flex items-center justify-center min-h-[40px] hover:shadow-md"
                        title={`Add ${emoticon}`}
                      >
                        {emoticon}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="sticky bottom-0 bg-white border-t border-gray-200 p-3 pt-2 rounded-b-xl">
                  <button
                    type="button"
                    onClick={() => setShowEmoticons(false)}
                    className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 rounded-lg text-white bg-red-700"
        >
          Send
        </button>
      </form>
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #ffdb58;
          border-radius: 8px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: #222;
        }
        .emoticon-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .emoticon-scroll::-webkit-scrollbar-thumb {
          background: #dc2626;
          border-radius: 4px;
          background-clip: content-box;
        }
        .emoticon-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .emoticon-scroll::-webkit-scrollbar-corner {
          background: transparent;
        }
        .emoticon-scroll {
          scrollbar-width: thin;
          scrollbar-color: #dc2626 transparent;
        }
      `}</style>
    </div>
  );
}
