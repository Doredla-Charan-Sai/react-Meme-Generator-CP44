import {Component} from 'react'
import {
  Form,
  Label,
  Input,
  Div,
  Heading,
  Button,
  Select,
  FormDiv,
  ImgDiv,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    url: '',
    top: '',
    bottom: '',
    fontSize: fontSizesOptionsList[0].optionId,
    urlTxt: '',
    topTxt: '',
    bottomTxt: '',
    fontSizeTxt: '',
  }

  onChangeUrl = event => {
    this.setState({url: event.target.value})
  }

  onChangeTop = event => {
    this.setState({top: event.target.value})
  }

  onChangeBottom = event => {
    this.setState({bottom: event.target.value})
  }

  onChangeOption = event => {
    this.setState({fontSize: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {url, top, bottom, fontSize} = this.state
    this.setState({
      urlTxt: url,
      topTxt: top,
      bottomTxt: bottom,
      fontSizeTxt: fontSize,
    })
  }

  render() {
    const {
      url,
      top,
      bottom,
      fontSize,
      urlTxt,
      topTxt,
      bottomTxt,
      fontSizeTxt,
    } = this.state
    return (
      <Div>
        <Heading>Meme Generator</Heading>
        <FormDiv>
          <Form onSubmit={this.submitForm}>
            <Label htmlFor="img-url">Image URL</Label>
            <Input
              type="text"
              id="img-url"
              placeholder="Enter the image URL"
              value={url}
              onChange={this.onChangeUrl}
            />
            <Label htmlFor="top">Top Text</Label>
            <Input
              type="text"
              id="top"
              placeholder="Enter the Top Text"
              value={top}
              onChange={this.onChangeTop}
            />
            <Label htmlFor="bottom">Bottom Text</Label>
            <Input
              type="text"
              id="bottom"
              placeholder="Enter the Bottom Text"
              value={bottom}
              onChange={this.onChangeBottom}
            />
            <Label htmlFor="fontsize">Font Size</Label>
            <Select
              id="fontsize"
              value={fontSize}
              onChange={this.onChangeOption}
            >
              {fontSizesOptionsList.map(eachOption => (
                <option key={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </Select>
            <Button type="submit">Generate</Button>
          </Form>
          {/* {topTxt !== '' &&
          bottomTxt !== '' &&
          fontSizeTxt !== '' &&
          urlTxt !== '' ? (
            <ImgDiv img={urlTxt} data-testid="meme">
              <Text size={fontSizeTxt}>{topTxt}</Text>
              <Text size={fontSizeTxt}>{bottomTxt}</Text>
            </ImgDiv>
          ) : null} */}
          <ImgDiv img={urlTxt} data-testid="meme">
            <Text size={fontSizeTxt}>{topTxt}</Text>
            <Text size={fontSizeTxt}>{bottomTxt}</Text>
          </ImgDiv>
        </FormDiv>
      </Div>
    )
  }
}

export default MemeGenerator
