export default function Footer() {
  const year = new Date().getFullYear()

  return (
   <footer className="bg-teal-900 space-y-4 py-4 text-amber-700 font-bold text-center text-xl">
     <p>Created with Power by Delta Cohort Squad</p>
     <p> &copy; {year} </p>
   </footer>
  )
}
