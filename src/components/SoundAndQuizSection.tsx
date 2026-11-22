import React, { useState } from 'react';
import { CULTURAL_QUIZ, QuizQuestion } from '../data/culturalData';
import { folkAudio } from '../utils/audioSynth';
import { Volume2, Award, CheckCircle2, XCircle, RotateCcw, Sparkles, Music, HelpCircle } from 'lucide-react';

export const SoundAndQuizSection: React.FC = () => {
  // Instrument Sound State
  const [activeSound, setActiveSound] = useState<string | null>(null);

  // Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const handlePlayInstrument = (type: 'khen' | 'dantinh' | 'congchieng', name: string) => {
    setActiveSound(name);
    if (type === 'khen') folkAudio.playKhenMôngNote();
    if (type === 'dantinh') folkAudio.playDanTinhNote();
    if (type === 'congchieng') folkAudio.playCongChieng();

    setTimeout(() => {
      setActiveSound(null);
    }, 1800);
  };

  const currentQ: QuizQuestion = CULTURAL_QUIZ[currentQuestionIndex];
  const hasAnsweredCurrent = selectedAnswers[currentQ.id] !== undefined;

  const handleSelectAnswer = (optionIdx: number) => {
    if (hasAnsweredCurrent) return;
    setSelectedAnswers(prev => ({ ...prev, [currentQ.id]: optionIdx }));
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestionIndex < CULTURAL_QUIZ.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setShowExplanation(false);
    setQuizFinished(false);
  };

  // Calculate score
  const totalCorrect = Object.entries(selectedAnswers).reduce((acc, [qId, ans]) => {
    const q = CULTURAL_QUIZ.find(item => item.id === Number(qId));
    return q && q.correctAnswer === ans ? acc + 1 : acc;
  }, 0);

  const getHonoraryTitle = (score: number) => {
    if (score === 4) return { title: 'Người Con Ưu Tú Của Bản Mường', desc: 'Bạn có sự thấu hiểu sâu sắc và tình yêu trọn vẹn với di sản ngàn đời của đồng bào Tây Bắc.' };
    if (score >= 2) return { title: 'Lữ Khách Say Mê Tây Bắc', desc: 'Bạn đã nắm vững những giá trị cốt lõi và nét đẹp tinh túy của vùng đất huyền thoại.' };
    return { title: 'Lữ Khách Mới Lên Núi', desc: 'Hãy tiếp tục khám phá thêm các câu chuyện văn hoá và nếp sống mộc mạc nơi đây nhé!' };
  };

  return (
    <section id="am-vang-nui-rung" className="py-20 lg:py-28 bg-[#F4EFEA] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest font-sans font-semibold text-[#A43B21] mb-2">
            Trải Nghiệm Đa Giác Quan
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Âm Vang Núi Rừng & Thử Thách Di Sản
          </h2>
          <div className="w-16 h-0.5 bg-[#A43B21] mx-auto mb-5" />
          <p className="text-base text-stone-700 font-light">
            Lắng nghe giai điệu nhạc cụ cổ truyền của người Mông, người Thái, người Mường và kiểm tra sự thấu hiểu văn hoá qua các câu đố dân tộc học.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Folk Sound Station */}
          <div className="lg:col-span-5 bg-white rounded-sm border border-stone-200/90 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#A43B21] font-semibold mb-2">
              <Music className="w-4 h-4" />
              <span>Phòng Thử Âm Cổ Truyền</span>
            </div>
            
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Giai Điệu Đại Ngàn
            </h3>
            
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
              Nhấp vào từng nhạc cụ bên dưới để kích hoạt nốt thanh âm ngũ cung mô phỏng theo tần số mộc bản xứ Tây Bắc.
            </p>

            <div className="space-y-4">
              
              {/* Instrument 1: Khen Hmong */}
              <div className="p-4 rounded-sm border border-stone-200 bg-stone-50/70 hover:border-amber-400 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-serif text-base font-bold text-stone-900">
                      Tiếng Khèn Mông
                    </h4>
                    <span className="text-xs text-stone-500">6 ống trúc, lưỡi gà đồng, âm sắc luyến láy</span>
                  </div>
                  <button
                    onClick={() => handlePlayInstrument('khen', 'Tiếng Khèn Mông')}
                    type="button"
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-amber-200 hover:bg-amber-300 text-stone-900 rounded-sm transition-colors shadow-2xs"
                  >
                    <Volume2 className={`w-4 h-4 ${activeSound === 'Tiếng Khèn Mông' ? 'animate-bounce text-[#A43B21]' : ''}`} />
                    <span>Nghe Thử</span>
                  </button>
                </div>
                <p className="text-xs text-stone-600 font-light">
                  Âm vang gọi bạn tình mùa xuân, xao xuyến qua hẻm núi đá tai mèo và nghi lễ tống tiễn thiêng liêng.
                </p>
              </div>

              {/* Instrument 2: Dan Tinh */}
              <div className="p-4 rounded-sm border border-stone-200 bg-stone-50/70 hover:border-emerald-400 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-serif text-base font-bold text-stone-900">
                      Đàn Tính Tẩu (Hát Then)
                    </h4>
                    <span className="text-xs text-stone-500">Bầu khô, cần gỗ dâu, dây tơ thanh tao</span>
                  </div>
                  <button
                    onClick={() => handlePlayInstrument('dantinh', 'Đàn Tính Tẩu')}
                    type="button"
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-emerald-200 hover:bg-emerald-300 text-stone-900 rounded-sm transition-colors shadow-2xs"
                  >
                    <Volume2 className={`w-4 h-4 ${activeSound === 'Đàn Tính Tẩu' ? 'animate-bounce text-[#19432B]' : ''}`} />
                    <span>Nghe Thử</span>
                  </button>
                </div>
                <p className="text-xs text-stone-600 font-light">
                  Tiếng đàn róc rách như dòng suối Thia mát lành, hòa nhịp cùng câu hát Then cầu chúc bản mường bình an.
                </p>
              </div>

              {/* Instrument 3: Cong Chieng */}
              <div className="p-4 rounded-sm border border-stone-200 bg-stone-50/70 hover:border-stone-400 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-serif text-base font-bold text-stone-900">
                      Cồng Chiêng Xứ Mường
                    </h4>
                    <span className="text-xs text-stone-500">Bộ 12 chiếc chiêng đồng ngân vang trầm hùng</span>
                  </div>
                  <button
                    onClick={() => handlePlayInstrument('congchieng', 'Cồng Chiêng')}
                    type="button"
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-stone-300 hover:bg-stone-400 text-stone-900 rounded-sm transition-colors shadow-2xs"
                  >
                    <Volume2 className={`w-4 h-4 ${activeSound === 'Cồng Chiêng' ? 'animate-bounce text-[#1C355E]' : ''}`} />
                    <span>Nghe Thử</span>
                  </button>
                </div>
                <p className="text-xs text-stone-600 font-light">
                  Thanh âm linh thiêng kết nối người trần với cội nguồn, ngân xa từ triền đồi sông Đà qua thung lũng Mai Châu.
                </p>
              </div>

            </div>

            {activeSound && (
              <div className="mt-5 p-3 bg-amber-50 border border-amber-200 text-center rounded-sm text-xs font-medium text-amber-900 animate-pulse">
                Đang phát: <strong className="font-serif">{activeSound}</strong>...
              </div>
            )}
          </div>

          {/* Right Column: Cultural Quiz Experience */}
          <div className="lg:col-span-7 bg-white rounded-sm border border-stone-200/90 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#A43B21] font-semibold">
                <HelpCircle className="w-4 h-4" />
                <span>Thử Thách: Dấu Ấn Văn Hoá Tây Bắc</span>
              </div>
              <span className="text-xs font-mono text-stone-500 tabular-nums">
                Câu {currentQuestionIndex + 1} / {CULTURAL_QUIZ.length}
              </span>
            </div>

            {!quizFinished ? (
              <div>
                {/* Question */}
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mb-6 leading-snug">
                  {currentQ.question}
                </h4>

                {/* Options (Buttons with clear states) */}
                <div className="space-y-3 mb-6">
                  {currentQ.options.map((opt, optIdx) => {
                    const isSelected = selectedAnswers[currentQ.id] === optIdx;
                    const isCorrect = currentQ.correctAnswer === optIdx;
                    
                    let btnStyle = 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200';
                    if (hasAnsweredCurrent) {
                      if (isCorrect) {
                        btnStyle = 'bg-emerald-100 text-emerald-950 border-emerald-400 font-medium';
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-100 text-rose-950 border-rose-400';
                      } else {
                        btnStyle = 'bg-stone-50 text-stone-400 border-stone-200 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectAnswer(optIdx)}
                        disabled={hasAnsweredCurrent}
                        type="button"
                        className={`w-full text-left p-4 rounded-sm border transition-all flex items-center justify-between text-xs sm:text-sm ${btnStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-bold text-stone-500 w-5">
                            {String.fromCharCode(65 + optIdx)}.
                          </span>
                          <span>{opt}</span>
                        </div>
                        {hasAnsweredCurrent && isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                        {hasAnsweredCurrent && isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Box */}
                {showExplanation && (
                  <div className="p-4 bg-stone-50 rounded-sm border border-stone-200 text-xs text-stone-700 space-y-2 mb-6">
                    <p className="font-medium text-stone-900">
                      💡 <strong>Giải thích:</strong> {currentQ.explanation}
                    </p>
                    <p className="text-stone-500 italic">
                      ✨ {currentQ.culturalFact}
                    </p>
                  </div>
                )}

                {/* Navigation Button */}
                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                  <span className="text-xs text-stone-500">
                    Chọn câu trả lời để xem đáp án chi tiết
                  </span>
                  {hasAnsweredCurrent && (
                    <button
                      onClick={handleNextQuestion}
                      type="button"
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-[#A43B21] hover:bg-[#882F19] rounded-sm transition-colors"
                    >
                      {currentQuestionIndex < CULTURAL_QUIZ.length - 1 ? 'Câu Tiếp Theo →' : 'Xem Kết Quả Tổng Kết'}
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* Quiz Finished Certificate View */
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-amber-100 text-[#A43B21] flex items-center justify-center mx-auto mb-4 border border-amber-300">
                  <Award className="w-8 h-8" />
                </div>

                <div className="text-xs uppercase tracking-widest font-sans font-semibold text-stone-500 mb-1">
                  Chứng Nhận Thấu Cảm Văn Hoá
                </div>

                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
                  {getHonoraryTitle(totalCorrect).title}
                </h4>

                <div className="font-serif text-lg text-[#A43B21] font-semibold mb-3">
                  Đúng {totalCorrect} / {CULTURAL_QUIZ.length} câu
                </div>

                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto mb-6 leading-relaxed">
                  {getHonoraryTitle(totalCorrect).desc}
                </p>

                <button
                  onClick={handleResetQuiz}
                  type="button"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-stone-800 bg-stone-200 hover:bg-stone-300 rounded-sm transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Thử Lại Từ Đầu</span>
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
