import styled from "styled-components";
import routerPaths from "../../router/router-paths";
import LinkButton, { LinkButtonType } from "./buttons/LinkButton";
import EmptyUser from "../../assets/emptyUser.png";

enum Gender {
  MALE = "male",
  FEMALE = "female",
}

type UserTileType = {
  cell: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  price: string;
  gender: string;
};

const UserTile = ({
  cell,
  firstName,
  lastName,
  email,
  avatar,
  price,
  gender,
}: UserTileType) => {
  return (
    <Tile>
      <ContentWrapper>
        <TileHead>
          {avatar ? (
            <Avatar src={avatar} alt="user face" />
          ) : (
            <Avatar src={EmptyUser} alt="infakt" />
          )}

          <TitleWrapper>
            <Title>
              {gender === Gender.FEMALE ? "Twoja księgowa" : "Twój księgowy"}
            </Title>
            <NamesWrapper>
              <FullName>
                {firstName} {lastName}
              </FullName>
            </NamesWrapper>
          </TitleWrapper>
        </TileHead>
        <DetailWrapper>
          <DetailTitle>E-mail</DetailTitle>
          <Detail $underlined={true} href={`mailto:${email}`}>
            {email}
          </Detail>
        </DetailWrapper>
        <DetailWrapper>
          <DetailTitle>Telefon</DetailTitle>
          <Detail href={`tel:${cell}`}>{cell}</Detail>
        </DetailWrapper>
        <DetailWrapper>
          <DetailTitle>Średnia cena netto usługi / m-c</DetailTitle>
          <Detail>
            {price} <Currency>PLN</Currency>
          </Detail>
        </DetailWrapper>
      </ContentWrapper>
      <LinkButton
        route={routerPaths.accountantsDetails}
        text="Dowiedz się więcej"
        type={LinkButtonType.SECONDARY}
      />
    </Tile>
  );
};

const ContentWrapper = styled.div``;

const DetailWrapper = styled.div`
  margin: 24px 0;
`;

const DetailTitle = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme: { colors } }) => colors.gray2};
`;

type DetailProps = {
  $underlined?: boolean;
};

const Detail = styled.a<DetailProps>`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme: { colors } }) => colors.black};
  text-decoration: ${({ $underlined }) => ($underlined ? "underline" : "none")};
`;

const Currency = styled.span`
  font-size: 12px;
  line-height: 16px;
`;

const TitleWrapper = styled.div`
  padding: 4px 0px 4px 16px;
`;

const Title = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme: { colors } }) => colors.gray2};
`;

const FullName = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme: { colors } }) => colors.black};
`;

const NamesWrapper = styled.div`
  display: flex;
`;

const TileHead = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
`;

const Tile = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.gray};
  border-radius: 16px;
  padding: 24px;
  min-width: 250px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.xs}px) {
    min-width: none;
    padding: 10px;
  }
`;

export default UserTile;
