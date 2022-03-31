export default function Countdown() {
    const now = new Date().getTime();
    const distance = new Date(1648677660 * 1000).getTime() - now;
    if (distance < 0) {
        return {
        expired: true,
        values: {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        };
    }
    else
    return {
        expired: false,
        values: {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        }
      }
}