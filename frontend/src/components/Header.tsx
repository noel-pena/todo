import { HeaderContainer, NavigationList, NavigationLink, NavigationItem } from '../theme/styles.ts';

export const Header = () => {
    return (
        <HeaderContainer>
            <NavigationList>
                {['Today', 'Week', 'Month'].map((label, index) => (
                    <NavigationLink key={index} href={label === 'Today' ? '/' : `/#/${label.toLowerCase()}`}>
                        <NavigationItem>{label}</NavigationItem>
                    </NavigationLink>
                ))}
            </NavigationList>
        </HeaderContainer>
    );
};