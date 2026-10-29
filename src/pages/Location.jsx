import {useParams,Link} from 'react-router-dom';import {Browser} from './Residences.jsx';import Seo from '../components/Seo.jsx';import {locations,properties} from '../data/properties.js';
export default function Location(){const {slug}=useParams(),l=locations.find(x=>x.slug===slug);if(!l)return <p className="pt-40 text-center">Location not found. <Link className="underline" to="/locations">All locations</Link></p>;
 const base=properties.filter(p=>p.area.toLowerCase().replace(/\s+/g,'-')===slug);
 return <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-36"><Seo title={l.name} desc={l.note}/><h1 className="font-serif text-6xl md:text-8xl text-walnut">{l.name}</h1><p className="mt-4 max-w-md">{l.note}</p>
 {base.length?<Browser base={base} hideArea/>:<p className="py-20 font-serif text-3xl text-walnut">We have no verified inventory here yet. <Link to="/viewing" className="underline">Tell us what you are looking for.</Link></p>}</div>}
