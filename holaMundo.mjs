import { platform } from 'node:os'
import pc from 'picocolors'

console.log(pc.green(platform()))
