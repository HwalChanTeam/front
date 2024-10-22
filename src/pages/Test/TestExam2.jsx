/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';

function TestExam2(props) {

    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const handleMouseOver = (submenu) => {
      setActiveSubmenu(submenu);
    };
    
      const categoryItemStyle = css`
        cursor: pointer;
        padding: 10px;
        background-color: #f0f0f0;
        margin: 5px 0;
      `;
    
      const submenuStyle = css`
        display: none;
        margin-top: 10px;
      `;
    
      const activeSubmenuStyle = css`
        display: block;
      `;
    
    return (
            <div>
              <nav>
                <ul css={css`list-style-type: none; padding: 0;`}>
                  <li 
                    css={categoryItemStyle} 
                    onMouseOver={() => handleMouseOver('milkit')}
                  >
                    밀키트
                  </li>
                  <li 
                    css={categoryItemStyle} 
                    onMouseOver={() => handleMouseOver('other')}
                  >
                    다른 카테고리
                  </li>
                </ul>
              </nav>
              <div css={[submenuStyle, activeSubmenu === 'milkit' && activeSubmenuStyle]}>
                <ul css={css`list-style-type: none; padding: 0;`}>
                  <li css={css`padding: 5px; background-color: #e0e0e0; margin: 3px 0;`}>밀키트 1</li>
                  <li css={css`padding: 5px; background-color: #e0e0e0; margin: 3px 0;`}>밀키트 2</li>
                  <li css={css`padding: 5px; background-color: #e0e0e0; margin: 3px 0;`}>밀키트 3</li>
                </ul>
              </div>
              <div css={[submenuStyle, activeSubmenu === 'other' && activeSubmenuStyle]}>
                <ul css={css`list-style-type: none; padding: 0;`}>
                  <li css={css`padding: 5px; background-color: #e0e0e0; margin: 3px 0;`}>다른 카테고리 1</li>
                  <li css={css`padding: 5px; background-color: #e0e0e0; margin: 3px 0;`}>다른 카테고리 2</li>
                </ul>
              </div>
            </div>
          );
}

export default TestExam2;