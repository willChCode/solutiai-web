import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar as CalendarIcon,
  User,
  Mail,
  MessageSquare,
  CheckCircle,
  Briefcase,
  ExternalLink,
} from "lucide-react";

const BookingCalendar: React.FC = () => {
  const [step, setStep] = useState(1); // 1: Date, 2: Time, 3: Form, 4: Success
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    description: "",
  });

  const services = [
    "Automatización con IA",
    "Desarrollo Web Pro",
    "E-commerce",
    "Soporte WordPress",
    "Hosting y Servidores",
    "Otro",
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  // Calendar Logic
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getDaysInMonth(currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay }, (_, i) => i);

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    );
  };

  const isPast = (day: number) => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day,
    );
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isSelected = (day: number) => {
    return (
      selectedDate?.getDate() === day &&
      selectedDate?.getMonth() === currentMonth.getMonth() &&
      selectedDate?.getFullYear() === currentMonth.getFullYear()
    );
  };

  const handleDateClick = (day: number) => {
    if (isPast(day)) return;
    setSelectedDate(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day),
    );
    setStep(2);
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
    );
  };

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1),
    );
  };

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp message
    const phoneNumber = "528135763561"; // Monterrey number from contact section
    const dateStr = selectedDate
      ? `${selectedDate.getDate()} de ${monthNames[selectedDate.getMonth()]}`
      : "";

    const message = `¡Hola SolutiAI! 👋 Me gustaría agendar una consulta gratuita.

1. *Fecha:* ${dateStr}
2. *Hora:* ${selectedTime}
3. *Nombre:* ${formData.name}
4. *Email:* ${formData.email}
5. *Servicio:* ${formData.service}
6. *Detalles:* ${formData.description}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    setStep(4); // Show success screen
  };

  return (
    <div className="bg-[#110813]/80 backdrop-blur-md border border-white/5 rounded-[2rem] p-6 lg:p-8 shadow-[0_10px_50px_rgba(0,0,0,0.5)] relative overflow-hidden h-full flex flex-col min-h-[500px]">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brand-pink)]/5 rounded-full blur-[80px]"></div>

      {/* Header */}
      {step < 4 && (
        <div className="relative z-10 mb-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            {step === 1 && (
              <>
                <CalendarIcon className="w-5 h-5 text-[var(--brand-pink)]" />{" "}
                Selecciona un día
              </>
            )}
            {step === 2 && (
              <>
                <Clock className="w-5 h-5 text-[var(--brand-pink)]" />{" "}
                Selecciona una hora
              </>
            )}
            {step === 3 && (
              <>
                <User className="w-5 h-5 text-[var(--brand-pink)]" /> Detalles
                de la consulta
              </>
            )}
          </h3>
          {selectedDate && step > 1 && (
            <p className="text-gray-400 text-sm mt-1">
              {selectedDate.getDate()} de {monthNames[selectedDate.getMonth()]}{" "}
              {selectedTime ? `a las ${selectedTime}` : ""}
            </p>
          )}
        </div>
      )}

      <div className="relative z-10 flex-grow">
        {/* STEP 1: CALENDAR */}
        {step === 1 && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-semibold">
                {monthNames[currentMonth.getMonth()]}{" "}
                {currentMonth.getFullYear()}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={prevMonth}
                  className="p-1 hover:bg-white/5 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-400" />
                </button>
                <button
                  onClick={nextMonth}
                  className="p-1 hover:bg-white/5 rounded-full transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {["D", "L", "M", "M", "J", "V", "S"].map((d) => (
                <span
                  key={d}
                  className="text-[10px] font-bold text-gray-500 uppercase"
                >
                  {d}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {blanks.map((b) => (
                <div key={`b-${b}`} />
              ))}
              {days.map((d) => (
                <button
                  key={d}
                  disabled={isPast(d)}
                  onClick={() => handleDateClick(d)}
                  className={`
                    aspect-square flex items-center justify-center rounded-xl text-sm font-medium transition-all
                    ${isPast(d) ? "text-gray-700 cursor-not-allowed" : "text-gray-300 hover:bg-[var(--brand-pink)]/20 hover:text-white"}
                    ${isSelected(d) ? "bg-[var(--brand-pink)] text-white shadow-[var(--neon-pink-glow)]" : ""}
                    ${isToday(d) && !isSelected(d) ? "border border-[var(--brand-pink)]/30" : ""}
                  `}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: TIME SLOTS */}
        {step === 2 && (
          <div className="animate-fade-in flex flex-col h-full">
            <div className="grid grid-cols-2 gap-3 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => {
                    setSelectedTime(time);
                    setStep(3);
                  }}
                  className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:border-[var(--brand-pink)] hover:bg-[var(--brand-pink)]/10 hover:text-white transition-all text-center"
                >
                  {time}
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="mt-6 text-gray-500 text-sm hover:text-white transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" /> Volver al calendario
            </button>
          </div>
        )}

        {/* STEP 3: FORM */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="animate-fade-in space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  required
                  type="text"
                  placeholder="Nombre completo"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-14 pr-5 text-white text-base focus:outline-none focus:border-[var(--brand-pink)] transition-all"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  required
                  type="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-14 pr-5 text-white text-base focus:outline-none focus:border-[var(--brand-pink)] transition-all"
                />
              </div>
              <div className="relative">
                <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <select
                  required
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full bg-[#1a0e1c] border border-white/10 rounded-xl py-4 pl-14 pr-5 text-white text-base focus:outline-none focus:border-[var(--brand-pink)] transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Selecciona el servicio
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-5 top-5 w-5 h-5 text-gray-500" />
                <textarea
                  required
                  rows={3}
                  placeholder="Cuéntanos sobre tu proyecto a detalle..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-14 pr-5 text-white text-base focus:outline-none focus:border-[var(--brand-pink)] transition-all resize-none"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[var(--brand-pink)] to-[var(--brand-purple)] text-white font-bold py-4.5 rounded-xl shadow-[var(--neon-purple-glow)] hover:opacity-90 transition-all transform hover:-translate-y-1 text-lg flex items-center justify-center gap-3"
            >
              Confirmar por WhatsApp
              <ExternalLink className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full text-gray-500 text-xs uppercase tracking-widest font-bold hover:text-white transition-colors py-2"
            >
              Cambiar horario
            </button>
          </form>
        )}

        {/* STEP 4: SUCCESS */}
        {step === 4 && (
          <div className="animate-fade-in flex flex-col items-center justify-center text-center h-full py-6">
            <div className="w-16 h-16 bg-[var(--brand-pink)]/20 rounded-full flex items-center justify-center mb-4 shadow-[var(--neon-pink-glow)]">
              <CheckCircle className="w-8 h-8 text-[var(--brand-pink)]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              ¡Solicitud Enviada!
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-[280px]">
              Se ha abierto WhatsApp con tu mensaje. Por favor, dale a "Enviar"
              para terminar de agendar tu cita.
            </p>

            <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">
                Resumen de tu cita
              </p>
              <div className="text-left space-y-2">
                <p className="text-white text-sm">
                  <span className="text-gray-500">Día:</span>{" "}
                  {selectedDate
                    ? `${selectedDate.getDate()} de ${monthNames[selectedDate.getMonth()]}`
                    : ""}
                </p>
                <p className="text-white text-sm">
                  <span className="text-gray-500">Hora:</span> {selectedTime}
                </p>
                <p className="text-white text-sm">
                  <span className="text-gray-500">Servicio:</span>{" "}
                  {formData.service}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setStep(1);
                setSelectedDate(null);
                setSelectedTime(null);
                setFormData({
                  name: "",
                  email: "",
                  service: "",
                  description: "",
                });
              }}
              className="text-[var(--brand-pink)] text-sm font-bold hover:underline uppercase tracking-widest"
            >
              Agendar otra cita
            </button>
          </div>
        )}
      </div>

      {/* Footer info */}
      {step < 4 && (
        <div className="mt-6 pt-4 border-t border-white/5 relative z-10">
          <p className="text-[10px] text-gray-500 text-center uppercase tracking-widest font-bold">
            Se requiere confirmación vía WhatsApp
          </p>
        </div>
      )}
    </div>
  );
};

export default BookingCalendar;
