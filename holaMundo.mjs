import { platform, release, arch, cpus } from 'node:os'

console.log(platform())
console.log(release())
console.log(arch())
console.log(cpus())