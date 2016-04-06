import { execFile } from 'child_process';
import flow from 'flow-bin';
import { expect } from 'chai';
import path from 'path';

describe('Material UI', function() {
  this.timeout(6 * 1000);
  it('should be able to tell the props of the app bar', (done) => {
      execFile(flow, ['check', path.resolve('fixtures/fail.js')], (err, stdout) => {
        expect(err).to.be.defined;
        expect(stdout).to.contain(
` 6: const element = <AppBar className={false} showMenuIconButton={null} />;
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ React element \`AppBar\`
  6: const element = <AppBar className={false} showMenuIconButton={null} />;
                                        ^^^^^ boolean. This type is incompatible with
 14:         className?: string,
                         ^^^^^^ string. See: index.js.flow:14

fixtures/fail.js:6
  6: const element = <AppBar className={false} showMenuIconButton={null} />;
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ props of React element \`AppBar\`
  6: const element = <AppBar className={false} showMenuIconButton={null} />;
                                                                   ^^^^ null. This type is incompatible with
 92:         showMenuIconButton: true,
                                 ^^^^ boolean literal \`true\`. See: index.js.flow:92`);
        done();
      });
  });
});
