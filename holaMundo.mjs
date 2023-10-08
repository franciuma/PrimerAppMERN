import { platform, release, arch, cpus } from 'node:os'
import pc from "picocolors"

console.log(pc.green(platform()))
