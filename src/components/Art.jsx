import Draw from './Draw.jsx';
// Real photographs: drop files into src/assets/photos named <slot>.jpg|webp (see README). Missing slots fall back to the drawn placeholder.
const m=import.meta.glob('../assets/photos/*.{jpg,jpeg,webp,png}',{eager:true,query:'?url',import:'default'});
const files=Object.fromEntries(Object.entries(m).map(([k,v])=>[k.split('/').pop().replace(/\.\w+$/,''),v]));
export default function Art({slot,src,alt='',ratio='4/3',eager,className='',...r}){const u=src||files[slot];
 if(!u)return <Draw alt={alt} ratio={ratio} className={className} {...r}/>;
 return <img src={u} alt={alt} loading={eager?'eager':'lazy'} fetchpriority={eager?'high':undefined} decoding="async" className={'w-full object-cover zoomable '+className} style={ratio==='auto'?{height:'100%'}:{aspectRatio:ratio}}/>}
