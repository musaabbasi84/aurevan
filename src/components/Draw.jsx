// Architectural placeholder composition. Pass `src` to use real licensed photography instead.
const T=[['#E9DFCC','#C9B896'],['#EADFD0','#B59B73'],['#DCD3C4','#8B7A5E'],['#C9C0B1','#6B6256'],['#E6DDC9','#A9976F'],['#EFE6D6','#BFAE8B']];
export default function Draw({tone=0,variant=0,src,alt='',className='',ratio='4/3'}){

 const [a,b]=T[(tone+variant)%T.length],w=40+(variant*11)%30;
 return <svg role="img" aria-label={alt||'Architectural illustration (placeholder for photography)'} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className={'w-full '+className} style={{aspectRatio:ratio==='auto'?undefined:ratio,height:ratio==='auto'?'100%':undefined}}>
  <rect width="400" height="300" fill={a}/><circle cx={300-variant*30} cy="70" r="26" fill="#F7EBCB" opacity=".8"/>
  <rect y="230" width="400" height="70" fill="#48433D" opacity=".18"/><rect x="60" y={110-w/4} width="190" height={120+w/4} fill={b}/><rect x="40" y="100" width="150" height="14" fill="#302921"/>
  <rect x="190" y="140" width="130" height="90" fill="#D9CEBD"/><rect x="80" y="135" width="90" height="95" fill="#302921" opacity=".82"/><rect x="205" y="155" width={w+30} height="60" fill="#302921" opacity=".7"/>
  <circle cx="350" cy="190" r="34" fill="#5E6B4E" opacity=".75"/><rect x="348" y="205" width="4" height="30" fill="#302921"/></svg>}
